<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import ombra from '$lib/assets/ombra.webp';
	import ombra_front from '$lib/assets/ombra_front-no-back.png';
	import  reddit_post from '$lib/assets/reddit_post.png';
	import plot_blue from '$lib/assets/plot_blue.png';

</script>
<body class="min-h-screen bg-hush-grey-500 font-redhat">
	<nav class="bg-hush-grey-500/75 sticky top-0 z-50">
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
			<button type="button" class="text-hush-grey-500">Get it now</button>
		</div>
	</nav>
	<div class="max-w-screen-xl flex flex-wrap flex-col items-center justify-between mx-auto p-4 mb-12 mt-24">
		<h1 class="text-hush-white  text-7xl font-bold ">Building the <span class="text-hush-blue-500">privacy </span> of the future</h1>
		<p class="text-hush-white center mt-10 text-xl text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		<button type="button" class="mt-9 max-w-40 font-redhat text-hush-white hover:text-white border-2 border-hush-blue-500 hover:bg-hush-blue-500 focus:ring-4 focus:outline-none focus:ring-hush-blue-500 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-blue-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-blue-500sh dark:focus:ring-hush-blue-500 bg-hush-blue-500">Learn more </button>
	<div class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mb-12">
		<h1 class="text-hush-white ml-auto text-7xl font-bold mt-5 text-center">The
			<span class="text-hush-blue-500">
				Problem
			</span>
		</h1>
		<p class="text-black text-2xl mt- text-center mr-auto ml-12 max-w-screen-md bg-hush-blue-500 border rounded-xl border-hush-blue-500">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		</p>
	</div>
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">

			<div class="max-w-md rounded overflow-hidden shadow-lg bg-hush-blue-500 text-black mr-24">
				<img class="w-full max-h-40 object-cover" src="{reddit_post}" alt="Reddit post">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">We asked, you answered</div>
					<p class="text-black text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="inline-block bg-hush-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#reddit</span>
					<span class="inline-block bg-hush-blue-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#questions</span>
					<span class="inline-block bg-hush-blue-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#masks</span>
				</div>
			</div>

				<div class="max-w-md rounded overflow-hidden shadow-lg bg-hush-blue-500 text-black ml-24">
					<div class="max-w-md max-h-40 bg-black">
						<img class="w-full max-h-40 object-contain" src="{plot_blue}" alt="Plot">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2">We asked, you answered</div>
						<p class="text-black text-base">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span class="inline-block bg-hush-blue-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#forms</span>
						<span class="inline-block bg-hush-blue-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#questions</span>
						<span class="inline-block bg-hush-blue-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#masks</span>
					</div>
				</div>

		</div>
	<div class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mb-12">
		<h1 class="text-hush-white mr-auto text-7xl font-bold mt-5 text-center">Our
			<span class="text-hush-blue-500">
				Mission
			</span>
		</h1>
		<p class="text-hush-white text-2xl mt- text-center ml-auto mr-12 max-w-screen-md bg-hush-blue-700 border rounded-xl border-hush-blue-500">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
		</p>
	</div>
	<!--<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<ul class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
			<li class="flex flex-col hover:scale-110 transform transition">
				<h1 class="text-hush-white mr-auto text-7xl font-bold  max-w-md">Building the </h1><h1 class="mr-auto text-7xl font-bold   max-w-md text-hush-blue-500">privacy </h1><h1 class="text-hush-white mr-auto text-7xl font-bold  max-w-md">of the future</h1>
				<button type="button" class="mt-9 max-w-40 font-redhat text-hush-white hover:text-white border-2 border-hush-blue-500 hover:bg-hush-blue-500 focus:ring-4 focus:outline-none focus:ring-hush-blue-500 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-blue-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-blue-500sh dark:focus:ring-hush-blue-500 bg-hush-blue-500">Learn more </button>
			</li>
			<li class="hover:scale-110 transform transition">
				<img src={ombra} alt="Ombra"  class="ml-16"/>
			</li>
		</ul>
		<h1 class="text-hush-white mr-auto text-7xl font-bold  max-w-md">Building the </h1><h1 class="mr-auto text-7xl font-bold   max-w-md text-hush-blue-500">privacy </h1><h1 class="text-hush-white mr-auto text-7xl font-bold  max-w-md">of the future</h1>
		<button type="button" class="mt-9 max-w-40 font-redhat text-hush-white hover:text-white border-2 border-hush-blue-500 hover:bg-hush-blue-500 focus:ring-4 focus:outline-none focus:ring-hush-blue-500 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-blue-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-blue-500sh dark:focus:ring-hush-blue-500 bg-hush-blue-500">Learn more </button>
	</div>-->


</body>
<style lang="scss">
    @use '$lib/color';
</style>