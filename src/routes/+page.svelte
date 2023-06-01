<script lang="ts">
  import Container from '$lib/shared/components/container.svelte';
  import PostCard from './post-card.svelte';

  let episodes = [
    {
      id: 1,
      title: `${1}: ${'ABC'}`,
      published: '2020-01-01',
      description: 'Learn the ABCs'
    },
    {
      id: 2,
      title: `${2}: ${'DEF'}`,
      published: '2020-01-02',
      description: 'Learn the DEFs'
    }
  ];
</script>

<div class="pb-12 pt-16 sm:pb-4 lg:pt-12">
  <Container>
    <h1 class="text-2xl font-bold leading-7 text-slate-900">Thoughts</h1>
  </Container>
  <div
    class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
  >
    {#each episodes as episode}
      <PostCard {episode} />
    {/each}
  </div>
</div>
