import { getMembers } from '$lib/github/teams';
import { parseContent } from '$lib/server/contents';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
  let res = await fetch(`contents?path=contents/${params.lang}/home/index.md`);
  let src = await res.text();
  let { metadata, content } = parseContent(src);

  let members = await getMembers();

  return {
    metadata,
    content,
    members,
  };
}
