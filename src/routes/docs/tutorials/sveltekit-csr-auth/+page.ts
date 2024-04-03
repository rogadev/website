import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    redirect(303, '/docs/tutorials/sveltekit-csr-auth/step-1');
};
