<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import ombra from '$lib/assets/ombra.webp';
</script>
<body class="min-h-screen bg-hush-grey-600 font-redhat">
<nav class="bg-hush-grey-600/75 sticky top-0 z-50">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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

<!-- Container for demo purpose -->
<div class="container my-24 mx-auto md:px-6">
	<!-- Section: Design Block -->
	<section class="mb-32">
		<!-- Jumbotron -->
		<div class="container mx-auto xl:px-32">
			<div class="grid items-center lg:grid-cols-2">
				<div class="mb-12 lg:mb-0">
					<div
						class=" text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-hush-grey-700 dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
						<h2 class="mb-2 pb-2 text-4xl text-hush-white font-bold">TACITUS mask</h2>
						<p class="mb-6 pb-2  text-xl font-bold text-hush-white dark:text-hush-white">
							for 99€
						</p>
						<p class="mb-6 pb-2  text-hush-white dark:text-hush-white">
							Say goodbye to unwanted attention. Perfect for privacy seekers, professionals and people that looks for Italian style.
						</p>
						<div class="mb-6 flex flex-wrap">
							<div class="mb-4 w-full md:w-4/12">
								<p class="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
											 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
										<path stroke-linecap="round" stroke-linejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Soundproof
								</p>
							</div>
							<div class="mb-4 w-full md:w-4/12">
								<p class="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
											 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
										<path stroke-linecap="round" stroke-linejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Bluethoot
								</p>
							</div>
							<div class="mb-4 w-full md:w-4/12">
								<p class="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
											 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
										<path stroke-linecap="round" stroke-linejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Compatible with all devices
								</p>
							</div>
							<div class="mb-4 w-full md:w-4/12">
								<p class="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
											 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
										<path stroke-linecap="round" stroke-linejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Comfort
								</p>
							</div>
							<div class="mb-4 w-full md:w-4/12">
								<p class="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
											 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
										<path stroke-linecap="round" stroke-linejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Style
								</p>
							</div>
							<div class="mb-4 w-full md:w-4/12">
								<p class="flex">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
											 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
										<path stroke-linecap="round" stroke-linejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>2 years warranty
								</p>
							</div>
						</div>
						<button type="button"
										class="mb-3inline-block rounded bg-hush-blue-600 px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-hush-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-hush-blue-600 dark:text-hush-white dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
										data-te-ripple-init data-te-ripple-color="light">
							Buy now
						</button>
					</div>
				</div>

				<div>
					<img src="{ombra}"
							 class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
				</div>
			</div>
		</div>
		<!-- Jumbotron -->
	</section>
	<!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->

<!--
    <div class="max-w-screen-xl mx-auto p-4 mb-12 mt-12">
        <h1 class="text-hush-white text-7xl font-bold mt-5 text-end mb-5">
            Technical
            <span class="text-hush-blue-500">
                Characteristics
            </span>
        </h1>
        <p class="text-hush-white text-2xl text-center mr-auto ml-12 w-1/2  bg-hush-blue-800 border rounded-xl border-hush-blue-800 shadow-xl">
            <span class="font-bold"> ESP32 Mini </span> for Bluethoot connection <br>
            <span class="font-bold">I2S communication protocol </span> for communication<br>
            <span class="font-bold">HFP profile </span>for dual communication <br>
            <span class="font-bold">Bone conduciton </span>for output audio <br>
            <span class="font-bold">Soundproof shield </span>for noise reduction <br>
            <span class="font-bold">Termal shield </span>for heat dissipation
        </p>
    </div>

    <div class="max-w-screen-xl  justify-between mx-auto p-4 mt-24">
		<h1 class="text-hush-white mr-auto text-7xl font-bold mt-5 text-left mb-5">The
			<span class="text-hush-blue-500">
				Price
			</span>
		</h1> 
		<p class="text-hush-white text-2xl mt- text-center ml-auto mr-12  w-1/2 bg-hush-blue-800 border rounded-xl border-hush-blue-800 shadow-xl">
			Available now for only: <br>
            <span class="text-3x1 font-bold">
                99€
            </span>
		</p>
    </div>

-->

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