export enum Tag {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  Text = "text",
  A = "a",
  Div = "div",
  Img = "img",
  Br = "br",
}

function parseTag(tag: string): Tag {
  switch (tag) {
    case "h1":
      return Tag.H1;
    case "h2":
      return Tag.H2;
    case "h3":
      return Tag.H3;
    case "h4":
      return Tag.H4;
    case "h5":
      return Tag.H5;
    case "h6":
      return Tag.H6;
    case "p":
      return Tag.P;
    case "a":
      return Tag.A;
    case "div":
      return Tag.Div;
    case "img":
      return Tag.Img;
    case "br":
      return Tag.Br;
    default:
      return Tag.Text;
  }
}

export class Element {
  private tag: Tag;
  public children: Element[];
  private attributes: Record<string, string>;
  private text?: string; // only for text nodes
  private classList: string[];
  private id?: string;

  constructor(tag: Tag) {
    this.tag = tag;
    this.children = [];
    this.attributes = {};
    this.classList = [];
  }

  public addClass(className: string): void {
    this.classList.push(className);
  }

  public setID(id: string): void {
    this.id = id;
  }

  public addAttribute(name: string, value: string): void {
    if (name === "class" || name === "id") {
      return;
    }
    this.attributes[name] = value;
  }

  public appendChild(child: Element): void {
    this.children.push(child);
  }

  public static text(text: string): Element {
    let el = new Element(Tag.Text);
    el.text = text;
    return el;
  }

  public static div(): Element {
    return new Element(Tag.Div);
  }

  public static heading(level: number, text: string): Element {
    let el = new Element(parseTag("h" + level));
    el.appendChild(Element.text(text));
    return el;
  }

  public static link(href: string, text: string): Element {
    let el = new Element(Tag.A);
    el.addAttribute("href", href);
    el.appendChild(Element.text(text));
    return el;
  }

  public static paragraph(): Element {
    return new Element(Tag.P);
  }

  public static image(src: string, alt: string): Element {
    let el = new Element(Tag.Img);
    el.addAttribute("src", src);
    el.addAttribute("alt", alt);
    return el;
  }

  public static br(): Element {
    return new Element(Tag.Br);
  }

  public isHeading(): boolean {
    return this.tag === Tag.H1 ||
      this.tag === Tag.H2 ||
      this.tag === Tag.H3 ||
      this.tag === Tag.H4 ||
      this.tag === Tag.H5 ||
      this.tag === Tag.H6;
  }

  public isBr(): boolean {
    return this.tag === Tag.Br;
  }

  public getId(): string | undefined {
    return this.id;
  }

  public render(): string {
    let res = "";
    if (this.tag === Tag.Text) {
      res += this.text;
    } else {
      res += `<${this.tag}`;
      if (this.id) {
        res += ` id="${this.id}"`;
      }
      if (this.classList.length > 0) {
        res += ` class="${this.classList.join(" ")}"`;
      }
      for (let name in this.attributes) {
        res += ` ${name}="${this.attributes[name]}"`;
      }
      res += `>`;
      for (let child of this.children) {
        res += child.render();
      }
      res += `</${this.tag}>`;
    }
    return res;
  }
}
