import { parseContent } from '$lib/server/contents';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
  let res = await fetch(`contents?path=contents/${params.lang}/home/index.md`);
  let src = await res.text();
  let { metadata, content } = parseContent(src);

  return {
    metadata,
    content,
  };
}
