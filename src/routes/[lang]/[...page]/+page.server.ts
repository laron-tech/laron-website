import { extractFrontMatter, transform } from "$lib/markdown";
import { parseHome } from "$lib/markdownHome";
import { getTemplate } from "$lib/templates";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
  let path = `/contents/?path=${params.lang}/`;

  if (params.page === '') {
    path += 'home/index.md'
  } else {
    path += params.page + '/index.md';
  }

  let res = await fetch(path);

  if (!res.ok) {
    throw error(res.status, res.statusText);
  }

  let content = await res.json();

  let { metadata, body } = extractFrontMatter(content);

  let page = () => {
    switch (params.page) {
      case '':
        return parseHome(body);
      default:
        return transform(body);
    }
  }

  return { page: page(), title: metadata.title, description: metadata.description, template: getTemplate(params.page) }
}
