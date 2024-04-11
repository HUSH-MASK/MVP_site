<script>
  import "../app.css";
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import Analytics from '$lib/analytics.svelte'
	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
</script>

<slot />