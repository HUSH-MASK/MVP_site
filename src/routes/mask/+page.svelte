<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import ombra from '$lib/assets/ombra.webp';
	import { IconArrowRight } from '@tabler/icons-svelte';
</script>
<body class="min-h-screen bg-hush-grey-500 font-redhat">
	<nav class="dark:bg-hush-grey-500">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
			<a href="{base}/home" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img src={logo} class="h-14" alt="HUSH! Logo" />
			</a>
			<button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
				</svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a href="{base}/home" class="text-hush-white block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:text-hush-blue-500" aria-current="page">Home</a>
					</li>
					<li>
						<a href="{base}/home" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">About</a>
					</li>
					<li>
						<a href="{base}/home" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Services</a>
					</li>
					<li>
						<a href="{base}/home" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Pricing</a>
					</li>
					<li>
						<a href="{base}/home" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Contact</a>
					</li>
				</ul>
			</div>
			<button type="button" class="font-redhat text-hush-white hover:text-white border-2 border-hush-blue-500 hover:bg-hush-blue-500 focus:ring-4 focus:outline-none focus:ring-hush-blue-500 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-blue-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-blue-500sh dark:focus:ring-hush-blue-500">Get it now</button>
		</div>
	</nav>
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
	<ul class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
		<li class="flex flex-col">
			<div class="hover:scale-110 transform transition block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white bg-hush-grey-700 mt-20">
				<p class="text-hush-white max-w-screen-sm text-xl ">Meet the solution to ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis fermentum magna sed volutpat.  <IconArrowRight class="ml-auto mr-12"/></p>
			</div>
			<h1 class="text-hush-white mr-auto text-7xl font-bold mt-60">HUSH! MASK</h1>
		</li>
		<li>
			<img src={ombra} alt="Ombra"  class="ml-16"/>
		</li>
	</ul>
</div>
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-hush-blue-700 border rounded-xl">
	<h1 class="text-hush-white mr-auto text-7xl font-bold mt-60">HUSH! MASK</h1>
</div>
</body>
<style lang="scss">
    @use '$lib/color';
</style>