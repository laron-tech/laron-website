import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { readDir } from '$lib/utils';

export const load: LayoutServerLoad = async ({ params }) => {
  let langs: string[] = readDir('src/contents');
  if (!langs.includes(params.lang)) {
    throw redirect(302, `/en/${params.lang}/${params.page}`);
  }
  return { lang: params.lang };
}
