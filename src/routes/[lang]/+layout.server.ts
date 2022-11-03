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
			return redirect(302, `/${requestLanguage}/${params.page}`);
		}
		return redirect(302, `/${supportedLanguages[0]}/${params.page}`);
	}

	return { lang: params.lang };
};
