<script lang="ts">
  import Container from '../lib/shared/components/container.svelte';
  import FormattedDate from '../lib/shared/components/formatted-date.svelte';

  export let post: any;
</script>

<article aria-labelledby={`${post?.title}`} class="py-10 sm:py-12">
  <Container>
    <div class="flex flex-col items-start">
      <h2
        class="mt-2 text-lg font-bold text-slate-900 hover:text-blue-500 hover:underline"
      >
        <a href={`${post.url}`}>{post.title}</a>
      </h2>
      <FormattedDate
        date={post?.date || ''}
        extraClasses="order-first font-mono text-sm leading-7 text-slate-500"
      />
      <!-- <p class="mt-1 text-base leading-7 text-slate-700">
        {post.description}
      </p> -->
    </div>
  </Container>
</article>
