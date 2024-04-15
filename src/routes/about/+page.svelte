<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import rick_photo from '$lib/assets/rick_photo.png';
	import laura_photo from '$lib/assets/laura_photo.png';
	import marco_b_photo from '$lib/assets/marco_b_photo.png';
	import paolo from '$lib/assets/paolo.jpg';
	import marco_d_photo from '$lib/assets/marco_d_photo.jpeg';
	import eddie_photo from '$lib/assets/eddie_photo.jpg';
	import peiro from '$lib/assets/peiro.jpeg';
	import { Dropdown, DropdownItem, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	let activeClass = 'text-white bg-hush-blue-800 md:text-white-700 md:dark:text-white dark:bg-hush-blue-800';
	$: activeUrl = $page.url.pathname;
</script>
<body class="min-h-screen bg-hush-grey-600 font-redhat">

<Navbar class="bg-hush-grey-600">
	<NavBrand href="{base}/home">
		<img src="{logo} " class="h-14 sm:h-14" alt="HUSH! Logo" />
	</NavBrand>
	<div class="flex md:order-2 bg-hush-grey-600">
		<NavHamburger class="text-hush-white bg-hush-grey-600 px-0 pt-0 pb-0 focus:border-hush-grey-600"
									menuClass="bg-clip-border bg-hush-grey-600 px-0 focus:border-hush-grey-600" />
	</div>
	<NavUl {activeUrl} {activeClass} class="order-1 mr-6 ml-6 bg-hush-grey-600"
				 classUl="bg-hush-grey-600 border-hush-blue-800">
		<NavLi class="text-hush-white" href="{base}/home">Home</NavLi>
		<NavLi class="text-hush-white" href="{base}/about">About</NavLi>
		<NavLi class="text-hush-white" href="{base}/mask">Solution</NavLi>
		<NavLi class="cursor-pointer text-hush-white">
			Pricing<ChevronDownOutline class="w-3 h-3 ms-2 text-hush-white dark:text-hush-white inline" />
		</NavLi>
		<Dropdown class="w-44 z-20 bg-hush-grey-600 text-hush-white">
			<DropdownItem href="{base}/pricing/ombra" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Ombra</DropdownItem>
			<DropdownItem href="{base}/pricing/white" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Bianco</DropdownItem>
			<DropdownItem href="{base}/pricing/black" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Nero</DropdownItem>
		</Dropdown>

	</NavUl>
</Navbar>

<div class="max-w-screen-xl mx-auto p-4 mb-6 mt-6 md:mt-24">

	<!-- MISSION-->

	<div class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 md:mt-12">
		<h1 class="text-hush-white md:mr-auto  text-4xl font-bold mt-5 mb-5 text-right md:text-center md:text-6xl">Our
			<span class="text-hush-blue-500">
				Mission
			</span>
		</h1>
		<p
			class="text-hush-white text-xl md:text-2xl text-center md:ml-auto max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl mb-6 md:mb-0">
			HUSH! aims to reinvent the way people communicate on the phone in public places, ensuring maximum privacy via our sound-absorbing mask. The first coming as a complete Bluetooth wearable device.
		</p>
	</div>

		<!-- ABOUT US-->

		<div id="about" class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 mb-12">
			<h1 class="text-hush-white mr-auto text-4xl font-bold mt-5 text-left mb-5 md:text-6xl md:text-left">
				About
				<span class="text-hush-blue-500">
				Us
			</span>
			</h1>
			<div>
				<p
					class="text-hush-white text-xl md:text-2xl text-center mx-auto md:ml-auto max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 mt-5 shadow-xl">
					We are a group of six university students eager to complete a project that is both ambitious and achievable, capable of bringing significant benefits to a concrete and everyday problem such as maintaining privacy during phone calls.
				</p>
				<p
					class="text-hush-white text-xl md:text-2xl text-center mx:auto md:ml-auto max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 mt-5 shadow-xl">
					Do you have challenging ideas about it and want to collaborate with us? Write to hushinnovation@gmail.com !
				</p>
			</div>
		</div>

		<div class="max-w-screen-xl flex flex-wrap  justify-between p-4 mx-auto items-start">

			<!-- LAURA CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{laura_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">LAURA</div>
					<p class="text-hush-white text-base">

						Curious and passionate about problem-solving from a young age, Laura's imagination drives her to innovate and improve ideas, leading her to pursue engineering. She's learned discipline and teamwork through ballet, volleyball, and theater.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#medical-engineering</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#materials</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#3Dprinting</span>
				</div>
			</div>

			<!-- MARCO B CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{marco_b_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">MARCO</div>
					<p class="text-hush-white text-base">
						Graduated with a three-year degree in computer science from the University of Trento. He's now engaged in a master's degree in cyber security. Oriented to mobile programming and problem solving he enjoys sports and technology.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#embedded</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#webdev</span>
				</div>
			</div>

			<!-- MARCO D CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{marco_d_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">MARCO</div>
					<p class="text-hush-white text-base">
						Graduated in economics at Padua, currently engaged in the first-level master's degree in innovation management, he is passionate about science and sport, and together with Paolo, he had the idea of Hush!
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#business</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#speaker</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#researcher</span>
				</div>
			</div>

			<!-- PAOLO CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56 object-cover" src="{paolo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">PAOLO</div>
					<p class="text-hush-white text-base">
						Graduated with a bachelor of economics and management in Luiss G.C. (Rome), he is currently studying Innovation Management at the University of Trento. Highly oriented towards a problem-solving approach, he has immediately believed in the potential of HUSH!
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#business</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#teamleader</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#researcher</span>
				</div>
			</div>

			<!-- RICCARDO CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 bg-black">
					<img class="w-full max-h-56  object-cover" src="{rick_photo}" alt="rick">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">RICCARDO</div>
					<p class="text-hush-white text-base">
						As a computer science tutor at NEST Trento, Riccardo supports students in programming and algorithms. He's pursuing a double master's in cybersecurity at the University of Twente and the University of Trento.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#embedded</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#webdev</span>
				</div>
			</div>

			<!-- EDDIE CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 object-cover">
					<img class="w-full max-h-56 object-cover" src="{eddie_photo}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">EDDIE</div>
					<p class="text-hush-white text-base">
						Graduated with a three-year degree in computer engineering from the University of Trento, he’s now engaged in a master's degree in cybersecurity. During his experience, he carried out various IoT and web programming projects on his own.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#embedded</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#researcher</span>
				</div>
			</div>

			<!-- RICCARDO P. CARD -->

			<div class="mx-auto max-w-md rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black md:ml-24 hover:scale-110 transform transition mb-10">
				<div class="max-w-md max-h-56 object-cover">
					<img class="w-full max-h-56 object-cover" src="{peiro}" alt="Plot">
				</div>
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">RICCARDO</div>
					<p class="text-hush-white text-base">
						Graduating with a bachelor's degree in ICT in Torino, Riccardo is currently pursuing a master's degree in Data Science at Trento. His perspective is characterized by an open mind and a positive approach to challenges.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">#computerscience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#datascience</span>
					<span class="text-hush-white inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">#ICT</span>
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
    body {
      margin: 0;
      height: 100%;
    }
</style>