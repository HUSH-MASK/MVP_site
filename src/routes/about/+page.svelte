<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import rick_photo from '$lib/assets/rick_photo.png';
	import laura_photo from '$lib/assets/laura_photo.png';
	import marco_b_photo from '$lib/assets/marco_b_photo.png';
	import paolo from '$lib/assets/paolo.jpg';
	import marco_d_photo from '$lib/assets/marco_d_photo.jpeg';
	import eddie_photo from '$lib/assets/eddie_photo.jpg';
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
			<button type="button" class="text-hush-grey-600">Get it now</button>
		</div>
	</nav>

	<div class="max-w-screen-xl flex flex-wrap flex-col items-center justify-between mx-auto p-4 mb-12 mt-12">

	<!-- MISSION-->

	<div class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mt-24m">
		<h1 class="text-hush-white mr-auto text-7xl font-bold mt-5 text-center mb-5">Our
			<span class="text-hush-blue-500">
				Mission
			</span>
		</h1>
		<p class="text-hush-white text-2xl mt- text-center ml-auto mr-12 max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl">
			HUSH! aims to reinvent the way people communicate on the phone in public places, ensuring maximum privacy via our sound-absorbing mask. The first coming as a complete Bluetooth wearable device.
		</p>
	</div>

		<!-- ABOUT US-->

		<div id="about" class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mb-12 mt-12">
			<h1 class="text-hush-white ml-auto text-7xl font-bold mt-5 text-center mb-5">
				About
				<span class="text-hush-blue-500">
				Us
			</span>
				<span class="text-hush-grey-600">
				.....
			</span>
			</h1>
			<p class="text-hush-white text-2xl mt- text-center mr-auto ml-12 max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl">
				We are a group of six university students eager to complete a project that is both ambitious and achievable, capable of bringing significant benefits to a concrete and everyday problem such as maintaining privacy during phone calls.
			</p>
			<p class="text-hush-white text-2xl text-center ml-auto mr-12 max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 mt-5 shadow-xl">
				Do you have challenging ideas about it and want to collaborate with us? Write to hushinnovation@gmail.com !
			</p>
		</div>

		<div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">

			<!-- LAURA CARD -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{laura_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">LAURA</div>
					<p class="text-hush-white text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#medical-engineering</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#materials</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#3Dprinting</span>
				</div>
			</div>

			<!-- MARCO B CARD -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{marco_b_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">MARCO</div>
					<p class="text-hush-white text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#embedded</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#webdev</span>
				</div>
			</div>

			<!-- MARCO D CARD -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{marco_d_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">MARCO</div>
					<p class="text-hush-white text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#business</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#speaker</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#researcher</span>
				</div>
			</div>

			<!-- PAOLO CARD -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{paolo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">PAOLO</div>
					<p class="text-hush-white text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#business</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#teamleader</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#researcher</span>
				</div>
			</div>

			<!-- RICCARDO CARD -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56  object-cover" src="{rick_photo}" alt="rick">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">RICCARDO</div>
					<p class="text-hush-white text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#embedded</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#webdev</span>
				</div>
			</div>

			<!-- EDDIE CARD -->

			<div class="max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 object-cover">
					<img class="w-full max-h-56 object-cover" src="{eddie_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">EDDIE</div>
					<p class="text-hush-white text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#embedded</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#researcher</span>
				</div>
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
    html {
      background: #222222;
    }
</style>