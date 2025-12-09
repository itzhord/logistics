<script lang="ts">
	import Marquee from './Marquee.svelte';
	import { Card } from '$lib/components/ui/card';

	const testimonials = [
		{
			name: 'Sarah Johnson',
			company: 'TechCorp International',
			content:
				'Bankar has revolutionized our shipping operations. Their tracking system is incredibly reliable and their customer service is top-notch.',
			rating: 5
		},
		{
			name: 'Michael Chen',
			company: 'Global Electronics',
			content:
				'We ship hundreds of packages monthly and Bankar handles everything seamlessly. The real-time tracking gives us complete peace of mind.',
			rating: 5
		},
		{
			name: 'Emma Williams',
			company: 'Fashion Forward Ltd',
			content:
				'Fast, reliable, and affordable. Bankar has been our go-to shipping partner for over 3 years. Highly recommended!',
			rating: 5
		},
		{
			name: 'David Martinez',
			company: 'AutoParts Direct',
			content:
				'The best logistics service we have ever used. Their air freight options saved us weeks on urgent shipments.',
			rating: 5
		},
		{
			name: 'Lisa Anderson',
			company: 'Organic Goods Co',
			content:
				'Exceptional service from start to finish. The team is professional and always keeps us informed about our shipments.',
			rating: 5
		},
		{
			name: 'James Taylor',
			company: 'BuildRight Construction',
			content:
				'Bankar handled our heavy machinery shipment with expertise. Arrived on time and in perfect condition.',
			rating: 5
		}
	];

	const firstRow = testimonials.slice(0, 3);
	const secondRow = testimonials.slice(3, 6);
</script>

<section id="reviews" class="overflow-hidden bg-gray-50 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold">What Our Customers Say</h2>
			<p class="text-lg text-gray-600">
				Trusted by thousands of businesses worldwide for reliable shipping
			</p>
		</div>

		<div class="relative space-y-4">
			<!-- First Row -->
			<Marquee speed={30}>
				{#each firstRow as testimonial}
					<Card class="w-[350px] p-6">
						<div class="mb-4 flex items-center gap-1">
							{#each Array(testimonial.rating) as _}
								<svg
									class="h-5 w-5 fill-yellow-400 text-yellow-400"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
									/>
								</svg>
							{/each}
						</div>
						<p class="mb-4 text-sm text-gray-700">{testimonial.content}</p>
						<div>
							<p class="font-semibold">{testimonial.name}</p>
							<p class="text-sm text-gray-600">{testimonial.company}</p>
						</div>
					</Card>
				{/each}
			</Marquee>

			<!-- Second Row (Reverse Direction) -->
			<Marquee speed={30} reverse={true}>
				{#each secondRow as testimonial}
					<Card class="w-[350px] p-6">
						<div class="mb-4 flex items-center gap-1">
							{#each Array(testimonial.rating) as _}
								<svg
									class="h-5 w-5 fill-yellow-400 text-yellow-400"
									viewBox="0 0 24 24"
								>
									<path
										d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
									/>
								</svg>
							{/each}
						</div>
						<p class="mb-4 text-sm text-gray-700">{testimonial.content}</p>
						<div>
							<p class="font-semibold">{testimonial.name}</p>
							<p class="text-sm text-gray-600">{testimonial.company}</p>
						</div>
					</Card>
				{/each}
			</Marquee>
		</div>
	</div>
</section>
