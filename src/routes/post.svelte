<script lang="ts">
  import Container from '$lib/shared/components/container.svelte';
  import FormattedDate from '$lib/shared/components/formatted-date.svelte';

  export let title = '';
  export let date = '';
</script>

<article class="py-16">
  <Container>
    <header class="flex flex-col">
      <div class="flex items-center gap-6">
        <div class="flex flex-col">
          <h1 class="mt-2 text-4xl font-bold text-slate-900">
            {title}
          </h1>
          <FormattedDate
            {date}
            extraClasses="order-first font-mono text-sm leading-7 text-slate-500"
          />
        </div>
      </div>
      <!-- <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
        {description}
      </p> -->
    </header>
    <hr class="my-12 border-gray-200" />
    <div
      class="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:leading-7 [&>h2]:text-slate-900 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
    >
      <slot />
    </div>
  </Container>
</article>
