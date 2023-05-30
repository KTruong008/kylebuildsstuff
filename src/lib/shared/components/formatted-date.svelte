<script lang="ts">
  export let date = new Date();
  export let extraClasses = '';

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
</script>

<time datetime={date.toISOString()} class={extraClasses}>
  {dateFormatter.format(date)}
</time>
