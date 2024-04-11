<script>
  import "../app.css";
	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
	import { initGA } from '../analytics.js';

	// Initialize Google Analytics
	initGA();
</script>

<slot />
