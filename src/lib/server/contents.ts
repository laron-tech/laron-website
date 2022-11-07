import { parseMarkdown } from '$lib/server/markdown/parse';

function extractFrontMatter(src: string) {
  let match = /---\r?\n([\s\S]+?)\r?\n---/.exec(src);
  const frontMatter = match![1];
  const body = src.slice(match![0].length);

  const metadata: Record<string, string> = {};
  frontMatter.split(/\r?\n/).forEach((line) => {
    const [key, value] = line.split(/:\s+/);
    metadata[key] = value;
  });
  return { metadata, body };
}

export function parseContent(src: string) {
  const { metadata, body } = extractFrontMatter(src);
  const elements = parseMarkdown(body);
  let content = '';
  elements.forEach((el) => {
    content += el.render();
  });
  return { metadata, content };
}
