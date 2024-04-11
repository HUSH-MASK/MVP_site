<script lang="ts">
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.png';
	import ombra from '$lib/assets/ombra.webp';
	import { Accordion, AccordionItem, Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import noise_chart from '$lib/assets/noise_chart.png';
	import { ChevronDoubleDownOutline, ChevronDoubleUpOutline } from 'flowbite-svelte-icons';
	import MediaQuery from 'svelte-media-queries';
	import { page } from '$app/stores';

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
		<NavLi class="text-hush-white" href="{base}/pricing">Pricing</NavLi>
	</NavUl>
</Navbar>

<MediaQuery query='(max-width: 768px)' let:matches>
	{#if matches}
		<div>
			<div>
				<img src="{ombra}"
						 class="translate-y-12 w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
			</div>
			<div class="-translate-y-36 container my-6 mx-auto md:px-6">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div
								class="bg-opacity-5 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl  font-bold text-hush-blue-500">TACITUS</h2>
								<p class="mb-6 pb-2  text-xl font-bold text-hush-white dark:text-hush-white">
									for 99€
								</p>
								<p class="mb-6 pb-2  text-hush-white dark:text-hush-white">
									Say goodbye to unwanted attention. Perfect for privacy seekers, professionals and people that looks
									for Italian style.
								</p>
								<div class="mb-6 flex flex-wrap">
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Soundproof
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Bluetooth
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Compatible with all devices
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Comfort
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Style
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											2 years warranty
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
						<MediaQuery query='(min-width: 769px)' let:matches>
							{#if matches}
								<div>
									<img src="{ombra}"
											 class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
								</div>
							{/if}
						</MediaQuery>
					</div>
				</div>
			</div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query='(min-width: 769px)' let:matches>
	{#if matches}
		<div class="container my-6 mx-auto md:px-6">
			<section class="mb-32">
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 lg:mb-0">
							<div
								class="bg-opacity-30 text-hush-white block bg-hush-grey-700 rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:px-12 lg:-mr-14 backdrop-blur-[30px]">
								<h2 class="mb-2 pb-2 text-4xl text-hush-blue-500 font-bold">TACITUS</h2>
								<p class="mb-6 pb-2  text-xl font-bold text-hush-white dark:text-hush-white">
									for 99€
								</p>
								<p class="mb-6 pb-2  text-hush-white dark:text-hush-white">
									Say goodbye to unwanted attention. Perfect for privacy seekers, professionals and people that looks
									for Italian style.
								</p>
								<div class="mb-6 flex flex-wrap">
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Soundproof
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Bluetooth
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Compatible with all devices
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Comfort
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											Style
										</p>
									</div>
									<div class="mb-4 w-full md:w-4/12">
										<p class="flex">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
													 stroke="currentColor" class="mr-3 h-5 w-5 text-hush-blue-600 dark:text-hush-blue-600">
												<path stroke-linecap="round" stroke-linejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
											</svg>
											2 years warranty
										</p>
									</div>
								</div>
								<button type="button"
												class="mb-3inline-block rounded bg-hush-blue-600 px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-hush-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-hush-blue-600 dark:text-hush-white dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
												data-te-ripple-init data-te-ripple-color="light">
									Buy
								</button>
							</div>
						</div>
						<MediaQuery query='(min-width: 769px)' let:matches>
							{#if matches}
								<div>
									<img src="{ombra}"
											 class="w-full rounded-lg shadow-lg dark:shadow-black/20 bg-hush-grey-500" alt="ombra" />
								</div>
							{/if}
						</MediaQuery>
					</div>
				</div>
				<!-- Jumbotron -->
			</section>
			<!-- Section: Design Block -->
		</div>
	{/if}
</MediaQuery>

<!-- Container for demo purpose -->

<div class="-translate-y-36 md:-translate-y-0">

	<div class="max-w-screen-xl mx-auto p-4">
		<h1 class="text-white text-4xl md:text-6xl font-bold mt-5 mb-5 text-right">
			Tech
			<span class="text-hush-blue-500">
					Specifications
				</span>
		</h1>
	</div>

	<div class="max-w-screen-md flex flex-wrap justify-between mx-auto p-4 md:mb-12">

		<Accordion flush class="text-hush-white flex-1">
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl">Soundproofing</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						10-15 dB at low frequencies
					</li>
					<li>
						20dB to 30dB at mid and high frequencies
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl hover:text-hush-blue-800">Materials</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						Polyester fabric: 60%
					</li>
					<li>
						Memory foam:16%
					</li>
					<li>
						Polyurethane leather: 4%
					</li>
					<li>
						ABS: 12%
					</li>
					<li>
						PLA: 2%
					</li>
					<li>
						Medical grade silicone: 1%
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl hover:text-hush-blue-800">Microphone</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						Frequency range: 35-18 kHz
					</li>
					<li>
						Microphone Sensitivity: -59 dB ± 3 dB (adapted to mask)
					</li>
					<li>
						Signal-to-noise: 74 dB (adapted to mask)
					</li>
					<li>
						Noise Cancellation: None (software noise suppression is recommended, like Krisp in Discord)
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl hover:text-hush-blue-800">Connectivity</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						Connectivity: Bluetooth® 5.2 HFP and A2DP
					</li>
					<li>
						Compatibility: Any device with Bluetooth connectivity
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl hover:text-hush-blue-800">Sound</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						Frequency response: 50Hz-16kHz
					</li>
					<li>
						Speaker sensitivity: 96dB±2.5dB
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl hover:text-hush-blue-800">Battery</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						Continuous play up to 24 hours of listening time with a single charge
					</li>
					<li>
						Standby time up to 10 days
					</li>
					<li>
						Battery capacity: 600mAh
					</li>
				</ul>
			</AccordionItem>
			<AccordionItem class="text-hush-white font-bold">
				<span slot="header" class="text-bold text-xl hover:text-hush-blue-800">Dimensions</span>
				<div slot="arrowup">
					<ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
				</div>
				<span slot="arrowdown">
      <ChevronDoubleDownOutline class="h-6 w-6  -me-0.5" />
    </span>
				<ul class="list-disc ps-5 dark:text-hush-white text-hush-white">
					<li>
						Weight S/M size: ~265 gr. (9.4 oz)
					</li>
					<li>
						Weight M/L size: ~280 gr. (9.8 oz)
					</li>
				</ul>
			</AccordionItem>
		</Accordion>

	</div>
</div>

<div class="max-w-screen-xl flex flex-wrap  justify-between mx-auto p-4 mb-12">
	<h1 class="text-white text-4xl md:text-6xl font-bold mb-5 text-right">
		Voice
		<span class="text-hush-blue-500">
					dampening
				</span>
	</h1>
	<p
		class="text-hush-white md:text-2xl mb-12 text-center md:ml-auto md:mr-12 max-w-screen-md bg-hush-blue-800  rounded-xl border-hush-blue-800 shadow-xl border-8">
		TACITUS reduces the volume of your voice up to -30dB. You could yell into your mask and your flatmates or partner
		could still sleep soundly next door.
	</p>
	<img src="{noise_chart}" alt="plot" class="max-w-sm md:max-w-screen-md mx-auto">
</div>

<footer class="bg-hush-blue-800 rounded-lg shadow m-4">
	<div class="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span class="text-sm text-white sm:text-center dark:text-hush-white">
            © 2024 <a href="{base}/home/" class="hover:underline">HUSH!™</a>. All Rights Reserved.
        </span>
		<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
			<li><a href="{base}/home#about" class="hover:underline me-4 md:me-6">About</a></li>
			<li><a href="{base}/home" class="hover:underline me-4 md:me-6">Privacy Policy</a></li>
			<li><a href="{base}/home" class="hover:underline me-4 md:me-6">Licensing</a></li>
			<li><a href="{base}/home#about" class="hover:underline">Contact</a></li>
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