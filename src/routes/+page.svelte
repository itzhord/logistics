<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	let trackingCode = $state('');
</script>

<svelte:head>
	<title>Bankar - Delivering Your Cargo Worldwide</title>
</svelte:head>

<main class="min-h-screen">
	<!-- Header/Navigation -->
	<header class="border-b bg-white">
		<nav class="container mx-auto flex items-center justify-between px-6 py-5">
			<div class="flex items-center gap-2">
				<div class="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-orange-600"></div>
				<span class="text-2xl font-bold">BANKAR.</span>
			</div>
			<div class="hidden gap-8 md:flex">
				<a href="/" class="text-sm font-medium hover:text-orange-500">Home</a>
				<a href="/about" class="text-sm font-medium hover:text-orange-500">About Us</a>
				<a href="#services" class="text-sm font-medium hover:text-orange-500">Services</a>
				<a href="#tracking" class="text-sm font-medium hover:text-orange-500">Track Package</a>
				<a href="#reviews" class="text-sm font-medium hover:text-orange-500">Reviews</a>
			</div>
			<Button class="rounded-md bg-orange-500 px-6 py-2.5 text-white hover:bg-orange-600">
				Contact us
			</Button>
		</nav>
	</header>

	<!-- Hero Section -->
	<section class="container mx-auto px-4 py-20 text-center">
		<h1 class="mb-8 text-5xl font-bold md:text-6xl">
			Delivering Your Cargo<br />
			<span class="flex items-center justify-center gap-2 text-orange-500">
				<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				Worldwide
			</span>
		</h1>

		<!-- (Pickup/Destination search and 360° badge removed) -->
	</section>

	<!-- Container Hero Image -->
	<section class="container mx-auto px-4 pb-20">
		<div class="relative overflow-hidden rounded-3xl bg-gray-900 p-12">
			<div class="relative z-10">
				<!-- Container visualization would go here -->
				<div class="mx-auto h-64 w-full max-w-2xl rounded-lg bg-gray-800/50"></div>
			</div>
		</div>
	</section>

	<!-- Client Logos -->
	<section class="border-y bg-gray-50 py-8">
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap items-center justify-center gap-8 md:gap-16">
				<span class="text-xl font-semibold">OXFAM</span>
				<span class="text-xl font-semibold">DT Global</span>
				<span class="text-xl font-semibold">NAYBA</span>
				<span class="text-xl font-semibold">MOVE</span>
				<span class="text-xl font-semibold">Winsupply</span>
				<span class="text-xl font-semibold">FERGUSON</span>
			</div>
		</div>
	</section>

	<!-- About Section with Stats -->
	<section class="bg-gray-900 py-20 text-white">
		<div class="container mx-auto px-4">
			<div class="grid gap-12 md:grid-cols-2">
				<div>
					<div class="mb-6 h-64 overflow-hidden rounded-lg bg-orange-500/20">
						<!-- Image placeholder -->
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="h-32 rounded-lg bg-gray-800"></div>
						<div class="flex h-32 items-center justify-center rounded-lg bg-orange-500">
							<svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
							</svg>
						</div>
					</div>
				</div>

				<div class="flex flex-col justify-center">
					<h2 class="mb-4 text-4xl font-bold">
						<span class="text-orange-500">#1</span> Nationwide<br />
						Delivery Logistics<br />
						Solution
					</h2>
					<p class="mb-8 text-gray-300">
						It is a swiss international cargo company established in the year 1970. with a buying
						spree of the new and old vessels, msc added almost 100 ships to its fleet in the last
						year, having a vessel line-up of over 645 container ship
					</p>
					<div class="flex gap-4">
						<Button class="bg-orange-500 hover:bg-orange-600">Get a Quote</Button>
						<Button variant="outline" class="border-white text-white hover:bg-white/10">
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="border-b bg-pink-50 py-16">
		<div class="container mx-auto px-4">
			<div class="grid gap-8 md:grid-cols-3">
				<div class="text-center">
					<div class="mb-2 text-5xl font-bold">
						30<sup class="text-3xl">K</sup>
					</div>
					<p class="text-sm text-gray-600">Active Customers Worldwide</p>
				</div>
				<div class="text-center">
					<div class="mb-2 text-5xl font-bold">
						$<span>20B</span>
					</div>
					<p class="text-sm text-gray-600">Total Revenue Earned By Bankar</p>
				</div>
				<div class="text-center">
					<div class="mb-2 text-5xl font-bold">
						$<span>300M</span>
					</div>
					<p class="text-sm text-gray-600">Total Parcels Delivered By Bankar</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="py-20">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-4xl font-bold">Shipping & Logistics<br />Services</h2>

			<div class="grid gap-6 md:grid-cols-3">
				<Card class="group overflow-hidden">
					<div class="h-64 overflow-hidden rounded-t-lg bg-blue-200">
						<!-- Sea shipping image placeholder -->
					</div>
					<div class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<h3 class="text-2xl font-bold">Sea Shipping</h3>
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-orange-500 group-hover:text-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</div>
				</Card>

				<Card class="group overflow-hidden">
					<div class="h-64 overflow-hidden rounded-t-lg bg-blue-300">
						<!-- Air shipping image placeholder -->
					</div>
					<div class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<h3 class="text-2xl font-bold">Air Shipping</h3>
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-orange-500 group-hover:text-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</div>
				</Card>

				<Card class="group overflow-hidden">
					<div class="h-64 overflow-hidden rounded-t-lg bg-orange-200">
						<!-- Train shipping image placeholder -->
					</div>
					<div class="p-6">
						<div class="mb-4 flex items-center justify-between">
							<h3 class="text-2xl font-bold">Train Shipping</h3>
							<div
								class="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-orange-500 group-hover:text-white"
							>
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="bg-pink-50 py-20">
		<div class="container mx-auto px-4">
			<div class="grid gap-12 md:grid-cols-2">
				<div>
					<h2 class="mb-8 text-4xl font-bold">Powering logistics<br />across business</h2>
					<p class="mb-8 text-gray-600">
						Delight your customers, scale operations, and boost efficiency with our advanced
						logistics platform. we're here to supercharge your supply chain.
					</p>

					<div class="space-y-6">
						<div class="flex gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
								<svg class="h-6 w-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-1 text-lg font-semibold">Nationwide carrier network</h3>
							</div>
						</div>

						<div class="flex gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
								<svg class="h-6 w-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-1 text-lg font-semibold">Fully-featured logistics software</h3>
							</div>
						</div>

						<div class="flex gap-4">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
								<svg class="h-6 w-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-1 text-lg font-semibold">Exception tracing & live support</h3>
							</div>
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center">
					<div class="h-96 w-full rounded-2xl bg-gradient-to-br from-blue-900 to-blue-600"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Map Section -->
	<section class="py-20">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-4xl font-bold">
				Find Locations To Buy, Sell<br />Or Lease Containers
			</h2>

			<div class="relative h-96 overflow-hidden rounded-2xl bg-gray-200">
				<!-- Map placeholder -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="rounded-lg bg-white p-4 shadow-lg">
						<div class="mb-2 flex items-center gap-2">
							<div class="h-8 w-8 rounded-full bg-blue-500"></div>
							<div>
								<div class="font-semibold">California, USA</div>
								<div class="text-sm text-gray-600">8662 Yuki Street, Arvada</div>
								<div class="text-sm text-gray-600">CA 80007</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Tracking Section -->
	<section id="tracking" class="bg-gray-900 py-20 text-white">
		<div class="container mx-auto px-4">
			<div class="grid gap-12 md:grid-cols-2">
				<div class="relative h-96 overflow-hidden rounded-2xl bg-gray-800">
					<!-- Tracking image placeholder -->
				</div>

				<div class="flex flex-col justify-center">
					<h2 class="mb-8 text-4xl font-bold">
						Track or Calculate<br />your shipments
					</h2>

					<div class="mb-6 space-y-4">
						<div class="flex gap-4">
							<Button
								variant="outline"
								class="flex-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
							>
								Shipment Tracking
							</Button>
							<Button variant="outline" class="flex-1 border-white text-white hover:bg-white/10">
								Shipment Rate
							</Button>
						</div>
					</div>

					<Card class="border-0 bg-white p-6">
						<form method="POST" action="?/track">
							<div class="mb-4">
								<Input
									type="text"
									name="code"
									bind:value={trackingCode}
									placeholder="Enter your shipment code"
									class="h-12 text-base"
									required
								/>
							</div>

							<div class="mb-4">
								<select
									class="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-base"
								>
									<option>Select Your Service</option>
									<option>Sea Shipping</option>
									<option>Air Shipping</option>
									<option>Train Shipping</option>
								</select>
							</div>

							<Button type="submit" class="w-full bg-orange-500 hover:bg-orange-600">
								Track Now
							</Button>
						</form>

						{#if form?.error}
							<p class="mt-4 text-sm text-red-600">{form.error}</p>
						{/if}
					</Card>
				</div>
			</div>
		</div>
	</section>

	<!-- Container Facilities -->
	<section class="py-20">
		<div class="container mx-auto px-4">
			<div class="mb-8 flex items-center justify-between">
				<h2 class="text-4xl font-bold">Explore all containers<br />facilities</h2>
				<Button variant="outline">Explore All</Button>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				<Card>
					<div class="h-48 overflow-hidden rounded-t-lg bg-blue-200"></div>
					<div class="p-6">
						<h3 class="mb-2 text-xl font-bold">40 Foot Container</h3>
						<div class="mb-4 flex items-baseline gap-2">
							<span class="text-2xl font-bold">$2,400</span>
							<span class="text-sm text-gray-600">/Per year</span>
						</div>
						<Button variant="outline" class="w-full">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</Button>
					</div>
				</Card>

				<Card class="border-orange-500">
					<div class="h-48 overflow-hidden rounded-t-lg bg-orange-200"></div>
					<div class="p-6">
						<h3 class="mb-2 text-xl font-bold">80 Foot Container</h3>
						<div class="mb-4 flex items-baseline gap-2">
							<span class="text-2xl font-bold">$2,400</span>
							<span class="text-sm text-gray-600">/Per year</span>
						</div>
						<Button class="w-full bg-orange-500 hover:bg-orange-600">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</Button>
					</div>
				</Card>

				<Card>
					<div class="h-48 overflow-hidden rounded-t-lg bg-yellow-200"></div>
					<div class="p-6">
						<h3 class="mb-2 text-xl font-bold">20 Foot Container</h3>
						<div class="mb-4 flex items-baseline gap-2">
							<span class="text-2xl font-bold">$2,400</span>
							<span class="text-sm text-gray-600">/Per year</span>
						</div>
						<Button variant="outline" class="w-full">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</Button>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="border-t bg-pink-50 py-20">
		<div class="container mx-auto px-4 text-center">
			<h2 class="mb-8 text-4xl font-bold">
				Let Us Deliver Your Package<br />To Its Destination
			</h2>
			<div class="flex justify-center gap-4">
				<Button class="bg-orange-500 hover:bg-orange-600">Track Parcel</Button>
				<Button variant="outline">Download App</Button>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<Testimonials />

	<!-- Footer -->
	<footer class="border-t bg-gray-900 py-16 text-white">
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
					<p class="mt-4 text-sm text-gray-500">Copyright © 2023 Bankar.</p>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Company</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li><a href="#" class="hover:text-white">About us</a></li>
						<li><a href="#" class="hover:text-white">Contact Us</a></li>
						<li><a href="#" class="hover:text-white">License's</a></li>
						<li><a href="#" class="hover:text-white">Careers</a></li>
						<li><a href="#" class="hover:text-white">Privacy Policy</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Products</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li><a href="#" class="hover:text-white">Container Leasing</a></li>
						<li><a href="#" class="hover:text-white">Container Trading</a></li>
						<li><a href="#" class="hover:text-white">Ocean Freight</a></li>
						<li><a href="#" class="hover:text-white">Container Control</a></li>
						<li><a href="#" class="hover:text-white">Container Tracking</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Join our newsletter</h3>
					<div class="flex gap-2">
						<Input
							type="email"
							placeholder="Enter email address"
							class="bg-gray-800 text-white"
						/>
						<Button class="bg-orange-500 hover:bg-orange-600">
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</Button>
					</div>
					<div class="mt-6 flex gap-4">
						<a
							href="#"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
								/>
							</svg>
						</a>
						<a
							href="#"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
						</a>
						<a
							href="#"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</a>
						<a
							href="#"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</main>
