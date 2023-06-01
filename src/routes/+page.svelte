<script lang="ts">
  import Container from '$lib/shared/components/container.svelte';
  import { POSTS_LIST } from '$lib/shared/shared.constant';
  import PostCard from './post-card.svelte';
</script>

<div class="pb-12 pt-16 sm:pb-4 lg:pt-12">
  <Container>
    <h1 class="text-2xl font-bold leading-7 text-slate-900">Thoughts</h1>
  </Container>
  <div
    class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
  >
    {#each POSTS_LIST as post}
      <PostCard {post} />
    {/each}
  </div>
</div>
