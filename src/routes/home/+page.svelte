<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import MediaQuery from 'svelte-media-queries';
	import logo from '$lib/assets/logo.png';
	import reddit_post from '$lib/assets/reddit_post.png';
	import plot_blue from '$lib/assets/plot_blue.png';
	import social_anxiety from '$lib/assets/social_anxiety.jpg';
	import phone from '$lib/assets/phone.jpg';
	import library from '$lib/assets/library.jpg';
	import {
		Carousel,
		Dropdown,
		DropdownDivider,
		DropdownItem,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	export const images = [
		{
			alt: "social_anxiety",
			src: social_anxiety,
			title: "social_anxiety"
		},
		{
			alt: "phone",
			src: phone,
			title: "phone"
		},
		{
			alt: "library",
			src: library,
			title: "library"
		}
	];

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
			<DropdownItem href="{base}/pricing/bianco" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Bianco</DropdownItem>
			<DropdownItem href="{base}/pricing/nero" class="focus:bg-hush-grey-600 hover:bg-hush-grey-600 hover:text-hush-blue-800">Tacitus Nero</DropdownItem>
		</Dropdown>

	</NavUl>
</Navbar>

<!-- TITLE-->

<div class="max-w-screen-xl flex flex-wrap flex-col items-center justify-between mx-auto p-4 mb-6 mt-6 md:mt-24">
	<h1 class="text-hush-white text-4xl md:text-6xl font-bold text-center">
		Too many people
		<span class="text-hush-blue-500">watching</span>
		, too many
		<span class="text-hush-blue-500">listening</span>
		?
	</h1>

	<MediaQuery query='(min-width: 769px)' let:matches>
		{#if matches}
			<p class="text-hush-white center mt-6 md:mt-10 text-xl md:text-2xl text-center">
				Privacy concerns are growing as people feel increasingly exposed to being overheard in public spaces. With
				HUSH!, regain control over your conversation. Our innovative products ensure your voice remains private,
				empowering you to speak confidently without fear of being heard. With HUSH!, your privacy is assured.
			</p>
		{/if}
	</MediaQuery>

	<MediaQuery query='(max-width: 768px)' let:matches>
		{#if matches}
			<div id="problem" class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 mb-6 mt-6">
				<p
					class="text-hush-white text-xl md:text-2xl text-center mx-auto max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl mb-6 md:mb-0">
					Privacy concerns are growing as people feel increasingly exposed to being overheard in public spaces. With
					HUSH!, regain control over your conversation.</p>
				<p
					class="text-hush-white text-xl md:text-2xl text-center mx-auto  max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl">
					Our innovative products ensure your voice remains private, empowering you to speak confidently without fear of
					being heard. With HUSH!, your privacy is assured.</p>
			</div>
		{/if}
	</MediaQuery>

	<h1 class="text-hush-white text-4xl md:text-6xl font-bold text-center mb-12 mt-12 md:mt-24">
		Well, we
		<span class="text-hush-blue-500">hear</span>
		you.
	</h1>

	<!-- PROBLEM -->

	<div id="problem" class="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 mb-3">
		<p
			class="text-hush-white text-xl md:text-2xl text-center mx-auto max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl mb-6 md:mr-auto md:ml-12">
			In quiet places like trains, speaking without disturbing others is a challenge. Whether chatting with fellow
			passengers or on the phone, people worry about causing inconvenience or invading privacy.
		</p>
		<p
			class="text-hush-white text-xl md:text-2xl text-center mx-auto max-w-screen-md bg-hush-blue-800 border-8 rounded-xl border-hush-blue-800 shadow-xl md:ml-auto md:mr-12">
			Not only that, but we found out that there are people concerned about showing their faces in public. They feel
			exposed and vulnerable, and they want to protect their privacy.
		</p>
	</div>

	<!-- SOLUTION -->

	<div
		class="min-w-full max-w-md flex-col justify-self-center justify-items-center flex-wrap items-center justify-between mx-auto mt-6 mb-12 p-4 bg-hush-blue-800 border border-hush-blue-800 rounded-xl">
		<h1 class="text-hush-white text-4xl md:text-7xl font-bold mt-12 mb-6 text-center">Meet our solution</h1>
		<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">
			<a href="{base}/mask">
				<button type="button"
								class="text-lg md:text-xl hover:scale-110 transform transition font-redhat text-hush-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 shadow-2xl">
					Discover TACITUS
				</button>
			</a>
		</div>
	</div>

	<MediaQuery query='(max-width: 768px)' let:matches>
		{#if matches}
			<div class="max-w-4x max-h-[224px] overflow-hidden rounded-2xl">
				<Carousel  {images} duration={3900}>
						<img src="{social_anxiety}" alt="social_anxiety"
								 class="rounded-3xl z-0 shadow-2xl hover:scale-110 hover:z-30 transform transition" />
						<img src="{phone}" alt="phone"
								 class="rounded-3xl z-10 shadow-2xl hover:scale-110 hover:z-30 transform transition" />
						<img src="{library}" alt="library"
								 class="rounded-3xl z-20 shadow-2xl hover:scale-110 hover:z-30 transform transition" />
					</Carousel>
			</div>
		{/if}
	</MediaQuery>

	<MediaQuery query='(min-width: 769px)' let:matches>
		{#if matches}
			<div class="relative max-w-full  py-12 *:w-[29%] *:inline-block mt-6 mb-6">
				<div class="-translate-y-8 translate-x-16 scale-110 hover:z-30">
					<img src="{social_anxiety}" alt="social_anxiety"
							 class="rounded-3xl z-0 shadow-2xl hover:scale-110 hover:z-30 transform transition" />
				</div>
				<div class="translate-x-16 scale-110 hover:z-30">
					<img src="{phone}" alt="phone"
							 class="rounded-3xl z-10 shadow-2xl hover:scale-110 hover:z-30 transform transition" />
				</div>
				<div class="translate-y-8 translate-x-16 scale-110 hover:z-30">
					<img src="{library}" alt="library"
							 class="rounded-3xl z-20 shadow-2xl hover:scale-110 hover:z-30 transform transition" />
				</div>
			</div>
		{/if}
	</MediaQuery>

	<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">

		<!-- REDDIT -->

		<div
			class="mx-auto md:ml-6 md:mr-6 mt-6 mb-6 max-w-md rounded-xl overflow-hidden bg-hush-grey-500 text-black hover:scale-110 transform transition shadow-xl">
			<a href="https://www.reddit.com/r/Italia/comments/1bjajuo/qualcuno_di_voi_sente_il_bisogno_di_coprirsi_o/">
				<img class="w-full max-h-40 object-cover" src="{reddit_post}" alt="Reddit post">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2 text-hush-blue-500">We asked, you answered</div>
					<p class="text-hush-white text-base">
						We started a social campaign on Reddit to understand to understand who, when and why people want to cover
						their face.
					</p>
				</div>
				<div class="px-6 pt-4 pb-2">
					<span
						class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#reddit</span>
					<span
						class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
					<span
						class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
				</div>
			</a>
		</div>

		<!-- FORM -->

		<div
			class="mx-auto md:ml-6 md:mr-6 mt-6 mb-6 max-w-md rounded-xl overflow-hidden shadow-xl bg-hush-grey-500 text-black  hover:scale-110 transform transition">
			<div class="max-w-md max-h-40 bg-black">
				<img class="w-full max-h-40 object-contain" src="{plot_blue}" alt="Plot">
			</div>
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-hush-blue-500">We asked, you answered</div>
				<p class="text-hush-white text-base">
					We created a form to collect data on the use of the phone in public places and the need for privacy. We shared
					it on social media, university groups and forums.
				</p>
			</div>
			<div class="px-6 pt-4 pb-2">
				<span
					class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-hush-white">#forms</span>
				<span
					class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#questions</span>
				<span
					class="inline-block bg-hush-grey-300 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2 text-hush-white">#masks</span>
			</div>
		</div>
	</div>

</div>

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