import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// This function will redirect '/' to the default /lang/
export const load: PageServerLoad = ({ params }) => {
  throw redirect(302, '/en/');
}
