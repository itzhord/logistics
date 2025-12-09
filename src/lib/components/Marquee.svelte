<script lang="ts">
	interface Props {
		children: import('svelte').Snippet;
		class?: string;
		speed?: number;
		pauseOnHover?: boolean;
		reverse?: boolean;
	}

	let { children, class: className = '', speed = 40, pauseOnHover = true, reverse = false }: Props = $props();
	
	const animationDuration = $derived(`${speed}s`);
	const animationDirection = $derived(reverse ? 'reverse' : 'normal');
</script>

<div 
	class="group relative flex overflow-hidden {className}"
	style="--duration: {animationDuration};"
>
	<div 
		class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 {pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}"
		style="animation-direction: {animationDirection};"
	>
		{@render children()}
	</div>
	<div 
		class="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-4 {pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}"
		style="animation-direction: {animationDirection};"
		aria-hidden="true"
	>
		{@render children()}
	</div>
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 1rem));
		}
	}

	.animate-marquee {
		animation: marquee var(--duration) linear infinite;
	}
</style>
