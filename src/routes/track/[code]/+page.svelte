<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const statusColors: Record<string, string> = {
		'In Transit': 'bg-blue-500',
		Delivered: 'bg-green-500',
		Processing: 'bg-yellow-500',
		'On Hold': 'bg-red-500'
	};
</script>

<svelte:head>
	<title>Track Shipment - {data.tracking.code}</title>
</svelte:head>

<main class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="border-b bg-white">
		<nav class="container mx-auto flex items-center justify-between px-6 py-5">
			<a href="/" class="flex items-center gap-2">
				<div class="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-orange-600"></div>
				<span class="text-2xl font-bold">BANKAR.</span>
			</a>
			<Button href="/" variant="outline">Back to Home</Button>
		</nav>
	</header>

	<!-- Main Content -->
	<section class="container mx-auto px-4 py-12">
		<!-- Tracking Header -->
		<Card class="mb-8 p-6">
			<div class="mb-4 flex items-center justify-between">
				<div>
					<h1 class="text-3xl font-bold">Tracking Details</h1>
					<p class="text-gray-600">Tracking Code: {data.tracking.code}</p>
				</div>
				<Badge
					class="{statusColors[data.tracking.status]} text-lg px-4 py-2 text-white hover:{statusColors[
						data.tracking.status
					]}"
				>
					{data.tracking.status}
				</Badge>
			</div>

			<div class="grid gap-6 md:grid-cols-4">
				<div>
					<p class="mb-1 text-sm text-gray-600">Origin</p>
					<p class="font-semibold">{data.tracking.origin}</p>
				</div>
				<div>
					<p class="mb-1 text-sm text-gray-600">Destination</p>
					<p class="font-semibold">{data.tracking.destination}</p>
				</div>
				<div>
					<p class="mb-1 text-sm text-gray-600">Estimated Delivery</p>
					<p class="font-semibold">{data.tracking.estimatedDelivery}</p>
				</div>
				<div>
					<p class="mb-1 text-sm text-gray-600">Current Location</p>
					<p class="font-semibold">{data.tracking.currentLocation}</p>
				</div>
			</div>
		</Card>

		<div class="grid gap-8 lg:grid-cols-3">
			<!-- Timeline -->
			<div class="lg:col-span-2">
				<Card class="p-6">
					<h2 class="mb-6 text-2xl font-bold">Shipment Timeline</h2>

					<div class="space-y-6">
						{#each data.tracking.timeline as event, index}
							<div class="relative flex gap-4">
								<!-- Timeline dot -->
								<div class="flex flex-col items-center">
									<div
										class="flex h-10 w-10 items-center justify-center rounded-full border-4 {event.completed
											? 'border-orange-500 bg-orange-500'
											: 'border-gray-300 bg-white'}"
									>
										{#if event.completed}
											<svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
												<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
											</svg>
										{/if}
									</div>
									{#if index < data.tracking.timeline.length - 1}
										<div
											class="h-full w-1 {event.completed ? 'bg-orange-500' : 'bg-gray-300'}"
										></div>
									{/if}
								</div>

								<!-- Event details -->
								<div class="flex-1 pb-8">
									<p class="mb-1 text-sm text-gray-600">{event.date}</p>
									<p class="font-semibold {event.completed ? 'text-gray-900' : 'text-gray-500'}">
										{event.status}
									</p>
									<p class="text-sm text-gray-600">{event.location}</p>
								</div>
							</div>
						{/each}
					</div>
				</Card>
			</div>

			<!-- Shipment Details -->
			<div class="space-y-6">
				<Card class="p-6">
					<h2 class="mb-4 text-xl font-bold">Shipment Details</h2>

					<div class="space-y-4">
						<div>
							<p class="mb-1 text-sm text-gray-600">Service Type</p>
							<p class="font-semibold">{data.tracking.service}</p>
						</div>
						<div>
							<p class="mb-1 text-sm text-gray-600">Weight</p>
							<p class="font-semibold">{data.tracking.weight}</p>
						</div>
						<div>
							<p class="mb-1 text-sm text-gray-600">Dimensions</p>
							<p class="font-semibold">{data.tracking.dimensions}</p>
						</div>
					</div>
				</Card>

				<Card class="p-6">
					<h2 class="mb-4 text-xl font-bold">Need Help?</h2>
					<p class="mb-4 text-sm text-gray-600">
						If you have any questions about your shipment, our customer support team is here to
						help.
					</p>
					<Button class="w-full bg-orange-500 hover:bg-orange-600"> Contact Support </Button>
				</Card>

				<Card class="bg-blue-50 p-6">
					<h3 class="mb-2 font-semibold">Track Another Shipment?</h3>
					<p class="mb-4 text-sm text-gray-600">Enter another tracking code to view details.</p>
					<Button href="/#tracking" variant="outline" class="w-full">
						Go to Tracking Form
					</Button>
				</Card>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="mt-20 border-t bg-gray-900 py-16 text-white">
		<div class="container mx-auto px-6">
			<div class="grid gap-12 md:grid-cols-4">
				<div>
					<div class="mb-4 flex items-center gap-2">
						<div class="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-orange-600"></div>
						<span class="text-xl font-bold">BANKAR.</span>
					</div>
					<p class="text-sm text-gray-400">
						The faster, easier way to book and manage your international shipments
					</p>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Quick Links</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li><a href="/" class="hover:text-white">Home</a></li>
						<li><a href="/#services" class="hover:text-white">Services</a></li>
						<li><a href="/#tracking" class="hover:text-white">Track Package</a></li>
						<li><a href="#" class="hover:text-white">Contact Us</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Try These Codes</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li>
							<a href="/track/BNK123456" class="hover:text-white">BNK123456 - In Transit</a>
						</li>
						<li>
							<a href="/track/BNK789012" class="hover:text-white">BNK789012 - Delivered</a>
						</li>
						<li>
							<a href="/track/BNK345678" class="hover:text-white">BNK345678 - Processing</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Contact</h3>
					<p class="text-sm text-gray-400">support@bankar.com</p>
					<p class="text-sm text-gray-400">1-800-BANKAR-1</p>
				</div>
			</div>
		</div>
	</footer>
</main>
