<script lang="ts">
  import { DateTime } from 'luxon';

  // e.g. 2023-02-05
  export let date = '';
  export let extraClasses = '';

  // e.g. February 5, 2023
  const formattedDate = DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
</script>

<time class={extraClasses}>
  {formattedDate}
</time>
