import { extractFrontMatter, transform } from "$lib/markdown";
import { parseHome } from "$lib/markdownHome";
import { getTemplate } from "$lib/templates";
import { exist, loadFile } from "$lib/utils";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  let path = `src/contents/${params.lang}/`;

  if (params.page === '') {
    path += 'home/index.md'
  } else {
    path += params.page + '/index.md';
  }

  if (!exist(path)) {
    throw error(404);
  }

  let { metadata, body } = extractFrontMatter(loadFile(path));
  let page = params.page === '' ? parseHome(body) : transform(body);

  return { page, title: metadata.title, description: metadata.description, template: getTemplate(params.page) }
}
