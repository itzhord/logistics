<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
</script>

<svelte:head>
	<title>About Us - Bankar</title>
</svelte:head>

<main class="min-h-screen bg-white">
	<!-- Header/Navigation -->
	<header class="border-b bg-white">
		<nav class="container mx-auto flex items-center justify-between px-6 py-5">
			<a href="/" class="flex items-center gap-2">
				<div class="h-10 w-10 rounded-md bg-gradient-to-br from-orange-500 to-orange-600"></div>
				<span class="text-2xl font-bold">BANKAR.</span>
			</a>
			<div class="hidden gap-8 md:flex">
				<a href="/" class="text-sm font-medium hover:text-orange-500">Home</a>
				<a href="/about" class="text-sm font-medium text-orange-500">About Us</a>
				<a href="/#services" class="text-sm font-medium hover:text-orange-500">Services</a>
				<a href="/#tracking" class="text-sm font-medium hover:text-orange-500">Track Package</a>
				<a href="/#reviews" class="text-sm font-medium hover:text-orange-500">Reviews</a>
			</div>
			<Button class="rounded-md bg-orange-500 px-6 py-2.5 text-white hover:bg-orange-600">
				Contact us
			</Button>
		</nav>
	</header>

	<!-- Hero Section -->
	<section class="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
		<div class="container mx-auto px-6">
			<div class="grid items-center gap-12 md:grid-cols-2">
				<div>
					<h1 class="mb-6 text-5xl font-bold leading-tight">
						We're Building the Future of
						<span class="text-orange-500">Global Logistics</span>
					</h1>
					<p class="mb-8 text-lg text-gray-700">
						Since 1995, Bankar has been delivering excellence in international shipping and
						logistics. We connect businesses with customers worldwide through reliable, efficient,
						and innovative shipping solutions.
					</p>
					<div class="flex gap-4">
						<Button class="bg-orange-500 px-8 py-3 hover:bg-orange-600">Get Started</Button>
						<Button variant="outline" class="px-8 py-3">Contact Sales</Button>
					</div>
				</div>
				<div class="flex justify-center">
					<div class="relative h-96 w-full rounded-lg bg-gradient-to-br from-orange-200 to-orange-300"></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Stats Section -->
	<section class="py-20">
		<div class="container mx-auto px-6">
			<div class="grid gap-8 md:grid-cols-4">
				<div class="text-center">
					<div class="mb-4 text-5xl font-bold text-orange-500">28+</div>
					<p class="text-lg text-gray-600">Years of Experience</p>
				</div>
				<div class="text-center">
					<div class="mb-4 text-5xl font-bold text-orange-500">150+</div>
					<p class="text-lg text-gray-600">Countries Served</p>
				</div>
				<div class="text-center">
					<div class="mb-4 text-5xl font-bold text-orange-500">30K+</div>
					<p class="text-lg text-gray-600">Happy Customers</p>
				</div>
				<div class="text-center">
					<div class="mb-4 text-5xl font-bold text-orange-500">300M+</div>
					<p class="text-lg text-gray-600">Parcels Delivered</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Mission & Vision -->
	<section class="bg-gray-50 py-20">
		<div class="container mx-auto px-6">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-4xl font-bold">Our Mission & Vision</h2>
				<p class="text-lg text-gray-600">
					Driving innovation and excellence in global logistics
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<Card class="p-8">
					<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
						<svg class="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold">Our Mission</h3>
					<p class="text-gray-700">
						To provide seamless, reliable, and cost-effective shipping solutions that empower
						businesses to reach customers worldwide. We strive to exceed expectations through
						innovation, transparency, and exceptional customer service.
					</p>
				</Card>

				<Card class="p-8">
					<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
						<svg class="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold">Our Vision</h3>
					<p class="text-gray-700">
						To be the world's most trusted and innovative logistics partner, connecting people and
						businesses across borders while setting new standards for sustainability and efficiency
						in the shipping industry.
					</p>
				</Card>
			</div>
		</div>
	</section>

	<!-- Core Values -->
	<section class="py-20">
		<div class="container mx-auto px-6">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-4xl font-bold">Our Core Values</h2>
				<p class="text-lg text-gray-600">The principles that guide everything we do</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<Card class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold">Speed & Efficiency</h3>
					<p class="text-gray-600">
						We deliver fast, efficient service without compromising quality or reliability.
					</p>
				</Card>

				<Card class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold">Trust & Security</h3>
					<p class="text-gray-600">
						Your cargo's safety is our priority. We ensure secure handling every step of the way.
					</p>
				</Card>

				<Card class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold">Global Reach</h3>
					<p class="text-gray-600">
						With operations in 150+ countries, we connect you to the world.
					</p>
				</Card>

				<Card class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold">Quality Assurance</h3>
					<p class="text-gray-600">
						We maintain the highest standards in every aspect of our service delivery.
					</p>
				</Card>

				<Card class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold">Customer Focus</h3>
					<p class="text-gray-600">
						Your success is our success. We're dedicated to exceeding your expectations.
					</p>
				</Card>

				<Card class="p-6">
					<div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
						<svg class="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold">Innovation</h3>
					<p class="text-gray-600">
						We continuously improve our technology and processes to serve you better.
					</p>
				</Card>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
		<div class="container mx-auto px-6 text-center">
			<h2 class="mb-4 text-4xl font-bold">Ready to Ship with Bankar?</h2>
			<p class="mb-8 text-xl">
				Join thousands of businesses worldwide who trust us with their logistics
			</p>
			<div class="flex justify-center gap-4">
				<Button class="bg-white px-8 py-3 text-orange-500 hover:bg-gray-100">
					Get a Quote
				</Button>
				<Button variant="outline" class="border-white px-8 py-3 text-white hover:bg-orange-700">
					Learn More
				</Button>
			</div>
		</div>
	</section>

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
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Quick Links</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li><a href="/" class="hover:text-white">Home</a></li>
						<li><a href="/about" class="hover:text-white">About Us</a></li>
						<li><a href="/#services" class="hover:text-white">Services</a></li>
						<li><a href="/#tracking" class="hover:text-white">Track Package</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Company</h3>
					<ul class="space-y-2 text-sm text-gray-400">
						<li><a href="/about" class="hover:text-white">About us</a></li>
						<li><a href="mailto:support@bankar.com" class="hover:text-white">Contact Us</a></li>
						<li><a href="/careers" class="hover:text-white">Careers</a></li>
						<li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
					</ul>
				</div>

				<div>
					<h3 class="mb-4 font-semibold">Contact</h3>
					<p class="mb-2 text-sm text-gray-400">support@bankar.com</p>
					<p class="mb-4 text-sm text-gray-400">1-800-BANKAR-1</p>
					<div class="flex gap-4">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
								/>
							</svg>
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-orange-500"
						>
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
								<circle cx="4" cy="4" r="2" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</main>
