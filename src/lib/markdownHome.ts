import { marked } from 'marked';


export function parseHome(markdown: string): string {
  let headingCount = 0;
  let result = '';

  let parseHeading = (token: marked.Tokens.Heading) => {
    let id = token.text.match(/\{#(.*)\}/);
    let idValue = id ? id[1] : '';
    let text = token.text.replace(/\{#(.*)\}/, '');
    if (headingCount < 1) {
      headingCount++;
      result += `<div class="section section-${headingCount}" id="${idValue}">\n`;
      result += `<div class="inner">\n`;
    } else {
      headingCount++;
      result += `</div>\n</div>\n<div class="section section-${headingCount}" id="${idValue}">\n<div class="inner">\n`;
    }
    result += `<h${token.depth}>`;
    result += text;
    result += `</h${token.depth}>\n`;
  }

  let parseParagraph = (token: marked.Tokens.Paragraph) => {
    result += '<p>';
    let text = token.text;
    let link = text.match(/\[(.*?)\]\((.*?)\)/);
    if (link) {
      text = text.replace(link[0], `<a href="${link[2]}" class="underline decoration-orange-600 text-orange-600">${link[1]}</a>`);
    }
    result += text;
    result += '</p>\n';
  }

  let tokens = marked.lexer(markdown);
  marked.walkTokens(tokens, (token) => {
    switch (token.type) {
      case 'heading':
        parseHeading(token);
        break;
      case 'paragraph':
        parseParagraph(token as marked.Tokens.Paragraph);
        break;
      case 'space':
        result += '<br>\n';
        break;
    };
  });

  result += '</div></div>\n';
  return result;
}
