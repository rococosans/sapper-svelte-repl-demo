<script>
	import Repl from '@sveltejs/svelte-repl';
	import { onMount } from 'svelte';

	let repl;

	onMount(() => {
		repl.set({
			components: [{
				name: "App",
				source: "",
				type: "svelte",
			}]
		});
	});
</script>

<style>
	.repl-outer {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--back);
		overflow: hidden;
		box-sizing: border-box;
		--pane-controls-h: 4.2rem;
	}

	.viewport {
		width: 100%;
		height: 100%;
	}
</style>

<div class="repl-outer">
	<div class="viewport">
		{#if process.browser}
			<Repl
				bind:this={repl}
				workersUrl="workers"
				relaxed
			/>
		{/if}
	</div>
</div>
