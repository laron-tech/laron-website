import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ fetch, params, request }) => {
	let requestLanguage = request.headers.get('accept-language')?.split(',')[0];
	if (!requestLanguage) {
		requestLanguage = 'en';
	} else {
		requestLanguage = requestLanguage.split('-')[0];
	}
	let res = await fetch('/contents?list=true');
	let supportedLanguages: string[] = await res.json();
	if (!supportedLanguages.includes(params.lang)) {
		if (supportedLanguages.includes(requestLanguage)) {
			throw redirect(302, `/${requestLanguage}/${params.lang}/${params.page}`);
		}
		throw redirect(302, `/${supportedLanguages[0]}/${params.lang}/${params.page}`);
	}

	return { lang: params.lang };
};
