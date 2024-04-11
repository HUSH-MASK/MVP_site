// src/analytics.js
import { onMount } from 'svelte';

export const initGA = () => {
	onMount(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'G-5GDJMTB0LX');
	});
};