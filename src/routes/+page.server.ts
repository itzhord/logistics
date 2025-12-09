import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	track: async ({ request }) => {
		const data = await request.formData();
		const code = data.get('code');

		if (!code || typeof code !== 'string') {
			return fail(400, { error: 'Please enter a valid tracking code' });
		}

		// Redirect to tracking page
		redirect(303, `/track/${code.toUpperCase()}`);
	}
};
