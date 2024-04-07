<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import  reddit_post from '$lib/assets/reddit_post.png';
	import plot_blue from '$lib/assets/plot_blue.png';
	import { IconArrowRight } from '@tabler/icons-svelte';
	import social_anxiety from '$lib/assets/social_anxiety.jpg';
	import phone from '$lib/assets/phone.jpg';
	import library from '$lib/assets/library.jpg';
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
						<a href="{base}/about" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">About</a>
					</li>
					<li>
						<a href="{base}/mask" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Services</a>
					</li>
					<li>
						<a href="{base}/pricing" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Pricing</a>
					</li>
					<li>
						<a href="{base}/about" class="text-hush-white block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-hush-blue-500">Contact</a>
					</li>
				</ul>
			</div>
			<button type="button" class="text-hush-grey-500">Get it now</button>
		</div>
	</nav>

	<!-- TITLE-->

	<div class="max-w-screen-xl flex flex-wrap flex-col items-center justify-between mx-auto p-4 mb-12 mt-24">
		<h1 class="text-hush-white  text-6xl font-bold hover:scale-110 transform transition text-center">
			Too many people
			<span class="text-hush-blue-500">watching</span>
			, too many
			<span class="text-hush-blue-500">listening</span>
			? <br><br> Well, we
			<span class="text-hush-blue-500">hear</span>
			you.
		</h1>
		<p class="hover:scale-110 transform transition text-hush-white center mt-10 text-xl text-center">Privacy concerns are growing as people feel increasingly exposed to being overheard in public spaces. With HUSH!, regain control over your conversations. Our innovative products ensure your voice remains private, empowering you to speak confidently without fear of being heard. With HUSH!, your privacy is assured.</p>
		<a href="{base}/home#problem">
			<button type="button" class="hover:scale-110 transform transition mt-9 max-w-40 font-redhat text-hush-white hover:text-black border-2 border-hush-blue-800 hover:bg-hush-blue-800 focus:ring-4 focus:outline-none focus:ring-hush-blue-800 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-blue-800 dark:text-hush-white dark:hover:text-hush-white dark:hover:bg-hush-blue-800sh dark:focus:ring-hush-blue-800 bg-hush-blue-800">Learn more </button>
		</a>

		<!-- PROBLEM -->

		<div id="problem" class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mb-12">
			<h1 class="text-hush-white ml-auto text-7xl font-bold mt-5 text-right mb-5">
				People
				<span class="text-hush-blue-500">
					Watching <br>
				</span>
				People
				<span class="text-hush-blue-500">
					Hearing
				</span>
			</h1>
			<p class="text-hush-white text-2xl text-center mr-auto ml-12 max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl">
				In quiet places like trains, speaking without disturbing others is a challenge. Whether chatting with fellow passengers or on the phone, people worry about causing inconvenience or invading privacy.
			</p>
			<p class="text-hush-white text-2xl text-center ml-auto mr-12 max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 mt-5 shadow-xl">
				Not only that, but we found out that there are people concerned about showing their faces in public. They feel exposed and vulnerable, and they want to protect their privacy.
			</p>
		</div>

		<div class="relative w-full max-w-full justify-center py-12 *:w-[33%] *:inline-block mt-6 mb-6">
		<div class="-translate-y-8 scale-110 hover:z-30">
			<img src="{social_anxiety}" alt="plot" class="rounded-3xl z-0 shadow-2xl hover:scale-110 hover:z-30 transform transition"/>
		</div>
		<div class="scale-110 hover:z-30">
			<img src="{phone}" alt="plot" class= "rounded-3xl z-10 shadow-2xl hover:scale-110 hover:z-30 transform transition"/>
		</div>
		<div class="translate-y-8 scale-110 hover:z-30">
			<img src="{library}" alt="plot" class="rounded-3xl z-20 shadow-2xl hover:scale-110 hover:z-30 transform transition"/>
		</div>
	</div>

		<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">

			<!-- REDDIT -->

			<div class="max-w-md rounded-xl overflow-hidden  bg-hush-grey-500 text-black mr-24 hover:scale-110 transform transition shadow-xl">
				<a href="https://www.reddit.com/r/Italia/comments/1bjajuo/qualcuno_di_voi_sente_il_bisogno_di_coprirsi_o/">
				<img class="w-full max-h-40 object-cover" src="{reddit_post}" alt="Reddit post">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">We asked, you answered</div>
					<p class="text-hush-white text-base">
						We started a social campaign on Reddit to understand to understand who, when and why people want to cover their face.
					</p>
					<IconArrowRight class="w-6 h-6 text-hush-blue-500 ml-auto" />
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#reddit</span>
					<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
					<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
				</div>
				</a>
			</div>
			<!-- FORM -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-24 hover:scale-110 transform transition">
				<div class="max-w-md max-h-40 bg-black">
					<img class="w-full max-h-40 object-contain" src="{plot_blue}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">We asked, you answered</div>
					<p class="text-hush-white text-base">
						We created a form to collect data on the use of the phone in public places and the need for privacy. This from was shared on social media, university groups and forums.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#forms</span>
					<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
					<span class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
				</div>
			</div>
		</div>


		<!-- SOLUTION -->

		<div class="min-w-full max-w-screen-xl flex-col justify-self-center justify-items-center flex-wrap items-center justify-between mx-auto mt-24 p-4 bg-hush-blue-800 border rounded-xl">
			<h1 class="text-hush-white mr-auto text-7xl font-bold mt-12 mb-6 text-center">Meet our solution.</h1>
			<h1 class="text-hush-white mr-auto text-3xl  mb-12 text-center">Because whispering was never an option</h1>

			<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">
				<a href="{base}/mask">
					<button type="button" class="text-xl hover:scale-110 transform transition font-redhat text-hush-white hover:text-white border-2 bg-hush-grey-500 border-hush-grey-500 hover:bg-hush-grey-500 focus:ring-4 focus:outline-none focus:ring-hush-grey-500 font-medium rounded-2xl  px-5 py-2.5 text-center me-2 mb-2 dark:border-hush-grey-500 dark:text-hush-white dark:hover:text-white dark:hover:bg-hush-grey-500 dark:focus:hush-grey-500">Discover TACITUS</button>
				</a>
			</div>

		</div>
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