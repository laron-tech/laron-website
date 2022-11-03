import { marked } from "marked";
import { g as getTemplate } from "../../../../chunks/templates.js";
import { e as exist, l as loadFile } from "../../../../chunks/utils.js";
import { e as error } from "../../../../chunks/index2.js";
function transform(body) {
  return marked(body);
}
function extractFrontMatter(markdown) {
  const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
  const frontmatter = match[1];
  const body = markdown.slice(match[0].length);
  const metadata = {};
  frontmatter.split("\n").forEach((pair) => {
    const i = pair.indexOf(":");
    metadata[pair.slice(0, i).trim()] = pair.slice(i + 1).trim();
  });
  return { metadata, body };
}
function parseHome(markdown) {
  let headingCount = 0;
  let result = "";
  let parseHeading = (token) => {
    let id = token.text.match(/\{#(.*)\}/);
    let idValue = id ? id[1] : "";
    let text = token.text.replace(/\{#(.*)\}/, "");
    if (headingCount < 1) {
      headingCount++;
      result += `<div class="section section-${headingCount}" id="${idValue}">
`;
      result += `<div class="inner">
`;
    } else {
      headingCount++;
      result += `</div>
</div>
<div class="section section-${headingCount}" id="${idValue}">
<div class="inner">
`;
    }
    result += `<h${token.depth}>`;
    result += text;
    result += `</h${token.depth}>
`;
  };
  let parseParagraph = (token) => {
    result += "<p>";
    let text = token.text;
    let link = text.match(/\[(.*?)\]\((.*?)\)/);
    if (link) {
      text = text.replace(link[0], `<a href="${link[2]}" class="underline decoration-orange-600 text-orange-600">${link[1]}</a>`);
    }
    result += text;
    result += "</p>\n";
  };
  let tokens = marked.lexer(markdown);
  marked.walkTokens(tokens, (token) => {
    console.log(token.type);
    switch (token.type) {
      case "heading":
        parseHeading(token);
        break;
      case "paragraph":
        parseParagraph(token);
        break;
      case "space":
        result += "<br>\n";
        break;
    }
  });
  result += "</div></div>\n";
  return result;
}
const load = ({ params }) => {
  let path = `src/contents/${params.lang}/`;
  if (params.page === "") {
    path += "home/index.md";
  } else {
    path += params.page + "/index.md";
  }
  if (!exist(path)) {
    throw error(404);
  }
  let { metadata, body } = extractFrontMatter(loadFile(path));
  let page = params.page === "" ? parseHome(body) : transform(body);
  return { page, title: metadata.title, description: metadata.description, template: getTemplate(params.page) };
};
export {
  load
};
