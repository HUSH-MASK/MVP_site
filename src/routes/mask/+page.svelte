<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import ombra from '$lib/assets/ombra.webp';
	import white_mask from '$lib/assets/white_mask-removebg-preview.png';
	import black_mask from '$lib/assets/black_mask.jpeg';
	import { IconArrowRight } from '@tabler/icons-svelte';
	import { Dropdown, DropdownItem, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import MediaQuery from 'svelte-media-queries';
	import { page } from '$app/stores';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	let activeClass = 'text-white bg-hush-blue-800 md:text-white-700 md:dark:text-white dark:bg-hush-blue-800';
	$: activeUrl = $page.url.pathname;
</script>
<body class="min-h-screen bg-hush-grey-600 font-redhat">

<Navbar class="bg-hush-grey-600 hover:bg-hush-grey-600">
	<NavBrand href="{base}/home">
		<img src="{logo} " class="h-14 sm:h-14" alt="HUSH! Logo" />
	</NavBrand>
	<div class="flex md:order-2 bg-hush-grey-600">
		<NavHamburger class="text-hush-white bg-hush-grey-600 px-0 pt-0 pb-0 focus:border-hush-grey-600"
									menuClass="bg-clip-border bg-hush-grey-600 px-0 focus:border-hush-grey-600 hover:bg-hush-grey-600" />
	</div>
	<NavUl {activeUrl} {activeClass} class="order-1 mr-6 ml-6 bg-hush-grey-600"
				 classUl="bg-hush-grey-600 border-hush-blue-800 hover:bg-hush-grey-600">
		<NavLi class="text-hush-white" href="{base}/home">Home</NavLi>
		<NavLi class="text-hush-white" href="{base}/about">About</NavLi>
		<NavLi class="text-hush-white" href="{base}/mask">Solution</NavLi>
		<NavLi class="cursor-pointer text-hush-white hover:bg-hush-grey-600">
			Pricing<ChevronDownOutline class="w-3 h-3 ms-2 text-hush-white dark:text-hush-white inline" />
		</NavLi>
		<Dropdown class="w-44 z-20 bg-hush-grey-600 text-hush-white">
			<DropdownItem href="{base}/pricing/ombra" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Ombra</DropdownItem>
			<DropdownItem href="{base}/pricing/white" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Bianco</DropdownItem>
			<DropdownItem href="{base}/pricing/black" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Nero</DropdownItem>
		</Dropdown>

	</NavUl>
</Navbar>

<MediaQuery query='(max-width: 768px)' let:matches>
	{#if matches}
		<div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 mb-8">

			<h1 class="text-hush-white mr-auto text-7xl font-bold mt-12">
						<span class="text-hush-blue-500">
							TACITUS
						</span>
				MASK
			</h1>


			<div
				class="flex-col hover:scale-110 shadow-xl transform transition block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white bg-hush-grey-700 mt-12">
				<p class="text-hush-white max-w-screen-sm text-xl ">
					Your discreet voice solution. Say goodbye to unwanted attention. Perfect for privacy seekers,
					professionals and people that looks for Italian style.
				</p>
				<p class="text-hush-white max-w-screen-sm text-xl mt-4">
					Get yours now and speak freely without fear.
				</p>
			</div>
		</div>

		<div class="max-w-screen-xl flex flex-col flex-wrap justify-between mx-auto p-4 mb-4">

			<h1 class="text-white text-4xl md:text-6xl font-bold text-right">
				Choose
				<span class="text-hush-blue-500">
					your design
				</span>
			</h1>

		</div>

		<div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 mb-6">
			<a href="{base}/pricing/black" class="flex-1 ml-3 mr-3 max-w-lg">
				<div
					class="mx-auto flex-1 max-w-lg rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black hover:scale-110 transform transition mb-4">
					<div class="max-w-lg  bg-black">
						<img class="w-full   object-contain bg-mask-gray" src="{black_mask}" alt="black_mask">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">NERO</div>
						<p class="text-hush-white text-base">
							Light, comfortable, with a clean and elegant design: this is Tacitus Nero.
						</p>
						<IconArrowRight class="ml-auto text-hush-white" />
					</div>
					<div class="px-6 pt-4 pb-2">
					</div>
				</div>
			</a>

			<a href="{base}/pricing/white" class="flex-1 ml-3 mr-3 max-w-lg mt-4">
				<div
					class="mx-auto flex-1 max-w-lg rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black hover:scale-110 transform transition mb-4">
					<div class="max-w-lg  bg-black">
						<img class="w-full   object-contain bg-mask-gray" src="{white_mask}" alt="white_mask">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">BIANCO</div>
						<p class="text-hush-white text-base">
							At the forefront of the new frontiers of fashion: this is Tacitus Bianco.
						</p>
						<IconArrowRight class="ml-auto text-hush-white" />
					</div>
					<div class="px-6 pt-4 pb-2">
					</div>
				</div>
			</a>

			<a href="{base}/pricing/ombra" class="flex-1 ml-3 mr-3 max-w-lg mt-4">
				<div
					class="mx-auto max-w-lg rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black hover:scale-110 transform transition mb-4">
					<div class="max-w-lg  bg-black">
						<img class="w-full  object-contain bg-mask-gray" src="{ombra}" alt="ombra">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">OMBRA</div>
						<p class="text-hush-white text-base">
							Redefine your boundaries with a new enigmatic look: this is Tacitus Ombra.
						</p>
						<IconArrowRight class="ml-auto text-hush-white" />
					</div>
					<div class="px-6 pt-4 pb-2">
					</div>
				</div>
			</a>

		</div>

		<div class="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 bg-hush-blue-800 rounded-xl mb-12">
			<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto">
				<!-- Comfort -->
				<div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 mr-0 md:mr-12 lg:mr-0">
					<div
						class="max-w-xs rounded-xl overflow-hidden bg-hush-grey-500 text-black hover:scale-110 transform transition shadow-xl">
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 text-hush-blue-500">Comfort</div>
							<p class="text-hush-white text-base">
								At the office, on the train, at home. You can wear TACITUS, you won't even notice.
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#comfort</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#heat</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#wearability</span>
						</div>
					</div>
				</div>
				<!-- Adjustable -->
				<div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 mr-0 md:mr-12 lg:mr-0">
					<div
						class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black hover:scale-110 transform transition">
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 text-hush-blue-500">Adjustable</div>
							<p class="text-hush-white text-base">
								Fully adjustable. Because there's no one-size-fits-all.
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#comfort</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#style</span>
						</div>
					</div>
				</div>
				<!-- Soundproof -->
				<div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 mr-0 md:mr-12 lg:mr-0">
					<div
						class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black hover:scale-110 transform transition">
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 text-hush-blue-500">Soundproof</div>
							<p class="text-hush-white text-base">
								Why whisper or move to another room? Just speak up and never worry about eavesdroppers again.
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#noise</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#soundproof</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#engineering</span>
						</div>
					</div>
				</div>
				<!-- Bone conduction -->
				<div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 mr-0 md:mr-12 lg:mr-0">
					<div
						class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black hover:scale-110 transform transition">
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 text-hush-blue-500">Bone conduction audio</div>
							<p class="text-hush-white text-base">
								Keep your ears free. Bone conduction technology will enable you to wear other audio devices. Your Hi-Fi
								headphones will not sit in a drawer.
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#audio</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#bone</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#free-ears</span>
						</div>
					</div>
				</div>
				<!-- Style -->
				<div class="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 mr-0 md:mr-12 lg:mr-0">
					<div
						class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black hover:scale-110 transform transition">
						<div class="px-6 py-4">
							<div class="font-bold text-xl mb-2 text-hush-blue-500">Style</div>
							<p class="text-hush-white text-base">
								Tacitus is a wearable made in Italy. And it shows. <br><br>It's not just a mask, it's a statement.
							</p>
						</div>
						<div class="px-6 pt-4 pb-2">
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#style</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#italy</span>
							<span
								class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
						</div>
					</div>
				</div>
			</div>
			<!--
			<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">
				<a href="{base}/pricing">
					<button type="button"
									class="text-xl hover:scale-110 transform transition font-redhat text-hush-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 shadow-2xl">
						Learn more
					</button>
				</a>
			</div>
			-->
		</div>
	{/if}
</MediaQuery>


<MediaQuery query='(min-width: 769px)' let:matches>
	{#if matches}
		<div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 mb-8">

			<h1 class="text-hush-white mr-auto text-7xl font-bold mt-12">
						<span class="text-hush-blue-500">
							TACITUS
						</span>
				MASK
			</h1>

			<div
				class="flex-col hover:scale-110 shadow-xl transform transition block rounded-lg p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white bg-hush-grey-700 mt-12">
				<p class="text-hush-white max-w-screen-sm text-xl ">
					Your discreet voice solution. Say goodbye to unwanted attention. Perfect for privacy seekers,
					professionals and people that looks for Italian style.
				</p>
				<p class="text-hush-white max-w-screen-sm text-xl mt-4">
					Get yours now and speak freely without fear.
				</p>
			</div>
		</div>

		<div class="max-w-screen-xl flex flex-col flex-wrap justify-between mx-auto p-4 ">

			<h1 class="text-white text-4xl md:text-6xl font-bold mb-5 text-right">
				Choose
				<span class="text-hush-blue-500">
					your design
				</span>
			</h1>

		</div>

		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mb-6 mt-6">

			<a href="{base}/pricing/black">

				<div
					class="mx-auto flex-1 max-w-lg rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black hover:scale-110 transform transition mb-4">
					<div class="max-w-lg  bg-black">
						<img class="w-full   object-contain bg-mask-gray" src="{black_mask}" alt="black_mask">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">NERO</div>
						<p class="text-hush-white text-base">
							Light, comfortable, with a clean and elegant design: this is Tacitus Nero.
						</p>
						<IconArrowRight class="ml-auto text-hush-white" />
					</div>
					<div class="px-6 pt-4 pb-2">
					</div>
				</div>

			</a>


			<a href="{base}/pricing/white">

				<div
					class="mx-auto flex-1 max-w-lg rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black hover:scale-110 transform transition mb-4">
					<div class="max-w-lg  bg-black">
						<img class="w-full   object-contain bg-mask-gray" src="{white_mask}" alt="white_mask">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">BIANCO</div>
						<p class="text-hush-white text-base">
							At the forefront of the new frontiers of fashion: this is Tacitus Bianco.
						</p>
						<IconArrowRight class="ml-auto text-hush-white" />
					</div>
					<div class="px-6 pt-4 pb-2">
					</div>
				</div>

			</a>

		</div>

		<div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 mb-6 mt-6">
			<a href="{base}/pricing/ombra">

				<div
					class="mx-auto max-w-lg rounded-xl overflow-hidden shadow-lg bg-hush-grey-500 text-black hover:scale-110 transform transition mb-4">
					<div class="max-w-lg  bg-black">
						<img class="w-full  object-contain bg-mask-gray" src="{ombra}" alt="ombra">
					</div>
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">OMBRA</div>
						<p class="text-hush-white text-base">
							Redefine your boundaries with a new enigmatic look: this is Tacitus Ombra.
						</p>
						<IconArrowRight class="ml-auto text-hush-white" />
					</div>
					<div class="px-6 pt-4 pb-2">
					</div>
				</div>

			</a>

		</div>


		<div class="max-w-screen-xl mx-auto p-4 bg-hush-blue-800  rounded-xl mb-12">
			<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto">

				<!-- Comfort -->

				<div
					class="max-w-xs rounded-xl overflow-hidden  bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition shadow-xl">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">Comfort</div>
						<p class="text-hush-white text-base">
							At the office, on the train, at home. You can wear TACITUS , you won't even notice.
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#comfort</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#heat</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#wearability</span>
					</div>
				</div>

				<!-- Adjustable -->

				<div
					class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">Adjustable</div>
						<p class="text-hush-white text-base">
							Fully adjustable. Because there's no one-size-fits-all.
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#comfort</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#style</span>
					</div>
				</div>

				<!-- Soundproof -->

				<div
					class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">Soundproof</div>
						<p class="text-hush-white text-base">
							Why whisper or moving to another room? Just speak up and never worry about eavesdroppers again.
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#noise</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#soundproof</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#engineering</span>
					</div>
				</div>

			</div>

			<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">

				<!-- Bone conduction -->

				<div
					class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">Bone conduction audio</div>
						<p class="text-hush-white text-base">
							Keep your ears free. Bone conduction technology will enable you to wear other audio devices. Your Hi-Fi
							headphones will not sit in a drawer.
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#audio</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#bone</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#free-ears</span>
					</div>
				</div>

				<!-- Style -->

				<div
					class="max-w-xs rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black mr-12 hover:scale-110 transform transition">
					<div class="px-6 py-4">
						<div class="font-bold text-xl mb-2 text-hush-blue-500">Style</div>
						<p class="text-hush-white text-base">
							Tacitus is a wearable made in Italy. And it shows. <br><br>It's not just a mask, it's a statement.
						</p>
					</div>
					<div class="px-6 pt-4 pb-2">
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#style</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#italy</span>
						<span
							class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
					</div>
				</div>
			</div>
			<!--
						<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">
							<a href="{base}/pricing">
								<button type="button"
												class="text-xl hover:scale-110 transform transition font-redhat text-hush-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 shadow-2xl">
									Learn more
								</button>
							</a>
						</div>

						-->

		</div>

	{/if}
</MediaQuery>

<footer class="bg-hush-blue-800 rounded-lg shadow m-4 dark:bg-hush-blue-800">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-hush-white sm:text-center dark:text-hush-white">© 2024 <a href="{base}/home/"
																																													class="hover:underline">HUSH!™</a>. All Rights Reserved.
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