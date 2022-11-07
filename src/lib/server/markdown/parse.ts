import { marked } from "marked";
import { Element } from "./element";

export function parseMarkdown(src: string): Element[] {
  let elements: Element[] = [];

  let lex = marked.lexer(src);

  marked.walkTokens(lex, (token) => {
    switch (token.type) {
      case "heading":
      case "paragraph":
      case "space":
        elements.push(parse(token));
    }
  });

  if (elements.length > 0 && elements[0].isBr()) {
    elements.shift();
  }

  let res: Element[] = [];
  let headingFound = false;
  let currentHeadingIndex = 0;

  for (let el of elements) {
    if (el.isHeading()) {
      headingFound = true;
      let div = Element.div();
      div.addClass("section");
      let id = el.getId();
      if (id) {
        let title = id.replace(/-/g, " ").replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
        div.addAttribute("data-title", title);
      }
      let innerDiv = Element.div();
      innerDiv.addClass("inner");
      innerDiv.appendChild(el);
      div.appendChild(innerDiv);
      res.push(div);
      currentHeadingIndex = res.length - 1;
      continue;
    }
    if (!headingFound) {
      res.push(el);
      continue;
    }
    res[currentHeadingIndex].children[0].appendChild(el);
  }

  return res;
}

function parse(token: marked.Token): Element {
  switch (token.type) {
    case "heading":
      return parseHeading(token);
    case "link":
      return parseLink(token);
    case "paragraph":
      return parseParagraph(token);
    case "text":
      return Element.text(token.text);
    case "image":
      return parseImage(token);
    case "br":
    case "space":
      return Element.br();
    default:
      return Element.text("");
  }
}

function parseHeading(token: marked.Tokens.Heading): Element {
  let text = token.text;
  let match = text.match(/(\s+{[#.][^}]+})+$/);
  let id: string | undefined;
  let classes: string[] = [];
  if (match) {
    let attrs = match[0].trim().slice(1, -1).split(" ");
    for (let attr of attrs) {
      if (attr.startsWith("#")) {
        id = attr.slice(1);
      } else if (attr.startsWith(".")) {
        classes.push(attr.slice(1));
      }
    }
    text = text.slice(0, match.index);
  }
  let h = Element.heading(token.depth, text);
  if (id) {
    h.setID(id);
  }
  if (classes.length > 0) {
    for (let cls of classes) {
      h.addClass(cls);
    }
  }
  return h;
}

function parseLink(token: marked.Tokens.Link): Element {
  return Element.link(token.href, token.text);
}

function parseParagraph(token: marked.Tokens.Paragraph): Element {
  let p = Element.paragraph();
  token.tokens.forEach((t) => {
    p.appendChild(parse(t));
  });
  return p;
}

function parseImage(token: marked.Tokens.Image): Element {
  let div = Element.div();
  div.addClass("img-container");
  let img = Element.image(token.href, token.text);
  div.appendChild(img);
  return div;
}
