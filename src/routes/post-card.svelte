<script lang="ts">
  import Container from '../lib/shared/components/container.svelte';
  import FormattedDate from '../lib/shared/components/formatted-date.svelte';

  export let post: any;

  let date = new Date(post?.published);
</script>

<article aria-labelledby={`episode-${post.id}-title`} class="py-10 sm:py-12">
  <Container>
    <div class="flex flex-col items-start">
      <h2 id={`episode-${post.id}-title`} class="mt-2 text-lg font-bold text-slate-900">
        <a href={`/${post.id}`}>{post.title}</a>
      </h2>
      <FormattedDate
        {date}
        extraClasses="order-first font-mono text-sm leading-7 text-slate-500"
      />
      <p class="mt-1 text-base leading-7 text-slate-700">
        {post.description}
      </p>
      <div class="mt-4 flex items-center gap-4">
        <a
          href={`/${post.id}`}
          class="flex items-center text-sm font-bold leading-6 text-black-500 hover:text-black-700 active:text-black-900 hover:text-blue-500 hover:underline"
          aria-label={`Show notes for episode ${post.title}`}
        >
          Read
        </a>
      </div>
    </div>
  </Container>
</article>
