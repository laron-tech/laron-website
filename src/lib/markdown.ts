import { marked, Renderer } from 'marked';

export function transform(body: string) {
	return marked(body);
}

export function extractFrontMatter(markdown: string) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontmatter = match![1];
	const body = markdown.slice(match![0].length);

	const metadata: Record<string, string> = {};
	frontmatter.split('\n').forEach((pair) => {
		const i = pair.indexOf(':');
		metadata[pair.slice(0, i).trim()] = pair.slice(i + 1).trim();
	});

	return { metadata, body };
}
