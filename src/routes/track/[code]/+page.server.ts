import { error } from '@sveltejs/kit';
import { trackingData } from '$lib/data/tracking';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const code = params.code.toUpperCase();
	const tracking = trackingData[code];

	if (!tracking) {
		error(404, 'Tracking code not found. Please check your code and try again.');
	}

	return {
		tracking
	};
};
