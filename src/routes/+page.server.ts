import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// This function will redirect '/' to the default /lang/
export const load: PageServerLoad = async ({ fetch, request }) => {
	let requestLanguage = request.headers.get('accept-language')?.split(',')[0];
	if (!requestLanguage) {
		requestLanguage = 'en';
	} else {
		requestLanguage = requestLanguage.split('-')[0];
	}
	let res = await fetch('/contents?list=true');
	let supportedLanguages: string[] = await res.json();
	if (supportedLanguages.includes(requestLanguage)) {
		throw redirect(302, `/${requestLanguage}/`);
	}
	throw redirect(302, `/${supportedLanguages[0]}/`);
};
