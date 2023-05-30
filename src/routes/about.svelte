<script lang="ts">
  export let extraClasses = '';

  let isExpanded = false;
</script>

<section class={extraClasses}>
  <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
    <span>About</span>
  </h2>
  <p
    class={`mt-2 text-base leading-7 text-slate-700 ${
      !isExpanded && 'lg:line-clamp-4'
    }}`}
  >
    A collection of thoughts about building stuff.
  </p>
  <!-- {#if !isExpanded}
    <button
      type="button"
      class="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
      on:click={() => {
        isExpanded = true;
      }}
    >
      Show more
    </button>
  {/if} -->
</section>
