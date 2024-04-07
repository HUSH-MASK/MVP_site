<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import ombra from '$lib/assets/ombra.webp';
 import noise_chart from '$lib/assets/noise_chart.png';
 import {IconArrowRight} from '@tabler/icons-svelte';
</script>
<body class="min-h-screen bg-hush-grey-600 font-redhat">
	<nav class="bg-hush-grey-600/75 sticky top-0 z-50">
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
						<a href="{base}/home#about" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">About</a>
					</li>
					<li>
						<a href="{base}/mask" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Services</a>
					</li>
					<li>
						<a href="{base}/pricing" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Pricing</a>
					</li>
					<li>
						<a href="{base}/home#about" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Contact</a>
					</li>
				</ul>
			</div>
			<a href="{base}/pricing">
				<button type="button" class="font-redhat text-hush-white hover:text-white border-2 border-hush-blue-500 hover:bg-hush-blue-500 focus:ring-4 focus:outline-none focus:ring-hush-blue-500 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-blue-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-blue-500sh dark:focus:ring-hush-blue-500">Get it now</button>
			</a>
		</div>
	</nav>
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-24">
	<ul class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
		<li class="flex flex-col">
			<div class="flex-col hover:scale-110 shadow-xl transform transition block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white bg-hush-grey-500 mt-20">
				<p class="text-hush-white max-w-screen-sm text-xl ">
					Your discreet voice solution. Say goodbye to unwanted attention. Perfect for privacy seekers, professionals and people that looks for Italian style.
				</p>
				<p class="text-hush-white max-w-screen-sm text-xl mt-4">
					Get yours now and speak freely without fear.
				</p>
				<IconArrowRight class="ml-auto text-hush-white"/>
			</div>
			<h1 class="text-hush-white mr-auto text-7xl font-bold mt-60"> <span class="text-hush-blue-500">TACITUS </span>MASK</h1>
		</li>
		<li>
			<img src={ombra} alt="Ombra"  class="ml-16 max-w-lg"/>
		</li>
	</ul>
</div>
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-hush-blue-800  rounded-xl">
	<h1 class="text-hush-white mr-auto text-7xl font-bold mt-12 mb-12">HUSH! It's Tacitus</h1>

	<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">

		<!-- Comfort -->

		<div class="max-w-xs rounded-xl overflow-hidden  bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition shadow-xl">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-hush-blue-500">Comfort</div>
				<p class="text-hush-white text-base">
					At the office, on the train, at home. TACITUS won't restrict your breathing or get too hot thanks to our in-built medical grade silicone valves.
				</p>
			</div>
			<div class="px-6 pt-4 pb-2">
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#reddit</span>
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
			</div>
		</div>

		<!-- Soundproof -->

		<div class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-hush-blue-500">Soundproof</div>
				<p class="text-hush-white text-base">
					Why whisper when you could scream as much as you want? Never worry about evesdroppers again.
				</p>
			</div>
			<div class="px-6 pt-4 pb-2">
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#forms</span>
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
			</div>
		</div>

		<!-- Adjustable -->

		<div class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition">
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-hush-blue-500">Adjustable</div>
				<p class="text-hush-white text-base">
					You already know one mask doesn't fit all. TACITUS has an adjustable system so you can fit it to your desired level of tightness and comfort.
				</p>
			</div>
			<div class="px-6 pt-4 pb-2">
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#forms</span>
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
				<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
			</div>
		</div>
		<a href="{base}/pricing">
			<button type="button" class="hover:scale-110 transform transition mt-12 font-redhat text-hush-white hover:text-white border-2 bg-hush-grey-500 border-hush-grey-500 hover:bg-hush-grey-500 focus:ring-4 focus:outline-none focus:ring-hush-grey-500 font-medium rounded-2xl text-xl px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-grey-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-grey-500 dark:focus:hush-grey-500">Get it now</button>
		</a>
	</div>
</div>

	<div class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mb-12 mt-12">
		<h1 class="text-hush-white ml-auto text-7xl font-bold mt-5 text-center mb-5">
			Voice
			<span class="text-hush-blue-500">
					dampening
				</span>
		</h1>
		<p class="text-hush-white text-2xl mt- text-center mr-auto ml-12 max-w-screen-md bg-hush-blue-800  rounded-xl border-hush-blue-800 shadow-xl border-8">
			TACITUS reduces the volume of your voice up to -30dB. You could yell into your mask and your flatmates or partner could still sleep soundly next door.
		</p>
	</div>

	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 rounded-xl">
		<img src="{noise_chart}" alt="plot" class="max-w-screen-md mx-auto">
	</div>

	<footer class="bg-hush-blue-800 rounded-lg shadow m-4 dark:bg-hush-blue-800">
		<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-hush-white sm:text-center dark:text-hush-white">© 2024 <a href="{base}/home/" class="hover:underline">HUSH!™</a>. All Rights Reserved.
    </span>
			<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-hush-white dark:text-hush-white sm:mt-0">
				<li>
					<a href="{base}/home#about" class="hover:underline me-4 md:me-6">About</a>
				</li>
				<li>
					<a href="{base}/home" class="hover:underline me-4 md:me-6">Privacy Policy</a>
				</li>
				<li>
					<a href="{base}/home" class="hover:underline me-4 md:me-6">Licensing</a>
				</li>
				<li>
					<a href="{base}/home#about" class="hover:underline">Contact</a>
				</li>
			</ul>
		</div>
	</footer>

</body>
<style lang="scss">
    @use '$lib/color';
</style>