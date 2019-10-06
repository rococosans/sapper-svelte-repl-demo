<script>
	import ReplWidget from '../components/ReplWidget.svelte';
</script>

<style>
	:global(body) {
		background: #000 !important;
	}

	.repl-container {
		width: 100%;
		height: 420px;
		border-radius: var(--border-r);
		overflow: hidden;
	}
</style>


<div class="repl-container">
	<ReplWidget />
</div>