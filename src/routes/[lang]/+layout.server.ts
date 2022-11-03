import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ fetch, params }) => {
	let res = await fetch('/contents?list=true');
	let langs: string[] = await res.json();
	if (!langs.includes(params.lang)) {
		throw redirect(302, `/en/${params.lang}/${params.page}`);
	}
	return { lang: params.lang };
};
