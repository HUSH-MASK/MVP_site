<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import logo from '$lib/assets/off_sound_logo.png';
	import { Dropdown, DropdownItem, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	let activeClass = 'text-white bg-hush-blue-800 md:text-white-700 md:dark:text-white dark:bg-hush-blue-800';
	$: activeUrl = $page.url.pathname;
</script>
<body class="min-h-screen bg-hush-grey-600 font-redhat">
<Navbar class="bg-hush-grey-600">
	<NavBrand href="{base}/home">
		<img src="{logo} " class="h-12 sm:h-12" alt="HUSH! Logo" />
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

	<!-- SOLUTION -->

<div class="max-w-screen-xl flex flex-col flex-wrap items-center justify-between mx-auto p-4 mb-6 mt-6 md:mt-24">

	<div
		class="min-w-full max-w-md flex-col justify-self-center justify-items-center flex-wrap items-center justify-between mx-auto mt-6 mb-12 p-4 bg-hush-blue-800 border border-hush-blue-800 rounded-xl">
		<h1 class="text-hush-white text-4xl md:text-7xl font-bold mt-12 mb-6 text-center">Thank you for your support</h1>
		<div class="max-w-screen-xl flex flex-wrap place-items-start justify-center p-4 mx-auto mb">
			<p
				class="text-hush-white text-xl md:text-2xl text-center mx-auto max-w-screen-md">
				OFF-SOUND! is a growing startup that still has to enter its manufacturing stage. Updates will be posted on this website.
			</p>
		</div>
	</div>

</div>

<footer class="bg-hush-blue-800 rounded-lg shadow m-4 dark:bg-hush-blue-800 sticky top-[100vh]">
	<div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-hush-white sm:text-center dark:text-hush-white">© 2024 <a href="{base}/home/"
																																													class="hover:underline">OFF-SOUND!™</a>. All Rights Reserved.
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