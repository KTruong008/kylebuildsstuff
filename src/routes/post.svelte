<script lang="ts">
  import Container from '../lib/shared/components/container.svelte';
  import FormattedDate from '../lib/shared/components/formatted-date.svelte';

  export let episode: any;

  let date = new Date(episode?.published);
</script>

<article aria-labelledby={`episode-${episode.id}-title`} class="py-10 sm:py-12">
  <Container>
    <div class="flex flex-col items-start">
      <h2
        id={`episode-${episode.id}-title`}
        class="mt-2 text-lg font-bold text-slate-900"
      >
        <a href={`/${episode.id}`}>{episode.title}</a>
      </h2>
      <FormattedDate
        {date}
        extraClasses="order-first font-mono text-sm leading-7 text-slate-500"
      />
      <p class="mt-1 text-base leading-7 text-slate-700">
        {episode.description}
      </p>
      <div class="mt-4 flex items-center gap-4">
        <a
          href={`/${episode.id}`}
          class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
          aria-label={`Show notes for episode ${episode.title}`}
        >
          Show notes
        </a>
      </div>
    </div>
  </Container>
</article>
