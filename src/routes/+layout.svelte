<script lang="ts">
  import GithubIcon from '$lib/shared/icons/github-icon.svelte';
  import TwitterIcon from '$lib/shared/icons/twitter-icon.svelte';
  import { GITHUB_URL, TWITTER_URL } from '$lib/shared/shared.constant';

  import '../app.css';
  // import About from './about.svelte';

  let projects = [
    ['Pickup & Delivery Buddy', 'https://apps.shopify.com/pickup-and-delivery-buddy'],
    ['AI Chat Bestie', 'https://github.com/KTruong008/aichatbestie'],
    ['Checkout Buddy', 'https://apps.shopify.com/checkout-buddy'],
    ['beepbooply', 'https://beepbooply.com']
  ];
</script>

<svelte:head>
  <title>Kyle - Builder of stuff</title>
  <meta name="description" content="Thoughts about building stuff" />
</svelte:head>

<header
  class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-80 lg:items-start lg:overflow-y-auto"
>
  <div
    class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12"
  >
    <div class="text-center lg:text-left">
      <p class="text-xl font-bold text-slate-900">
        <a href="/">Kyle</a>
      </p>
      <a href="/">
        <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
          Builder of stuff
        </p>
      </a>
      <div class="mt-1 flex justify-center lg:justify-start">
        <a
          href={GITHUB_URL}
          target="_blank"
          class="text-gray-400 hover:text-gray-500"
          aria-label="Github"
        >
          <GithubIcon />
        </a>
        <a
          href={TWITTER_URL}
          target="_blank"
          class="ml-3 text-gray-400 hover:text-gray-500"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </a>
      </div>
      <!-- <About extraClasses="mt-12 hidden lg:block" /> -->

      <!-- Projects -->
      <section class="mt-10 lg:mt-12">
        <h2
          class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only"
        >
          <span>Stuff</span>
        </h2>
        <div
          class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"
        />
        <ul
          class="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
        >
          {#each projects as [label, url]}
            <li class="flex">
              <a
                href={url}
                target="_blank"
                class="group flex items-center hover:text-blue-500 hover:underline"
                aria-label={label}
              >
                <span class="hidden sm:block">{label}</span>
              </a>
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </div>
</header>

<!-- Right-side Content -->
<main class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-80 lg:border-t-0">
  <div class="relative">
    <slot />
  </div>
</main>
