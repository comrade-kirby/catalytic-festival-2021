<script>
  import Link from '../../../shared_components/Link.svelte'
  export let performance
</script>

{#if performance.info}
  <button class='performance-info focusable'>
    <div class='title'>
      <svg class='selected' viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50"></circle>
      </svg>
      <h3>{performance.name}</h3>
    </div>
    <div class='details'>
      {#if performance.info.bio}
        <p>{performance.info.bio}</p>
      {/if}
      {#if performance.info.link}
        <Link href={performance.info.link} text='website' />
      {/if}
    </div>
  </button>
{:else}
  <h3 class='no-info'>{performance.name}</h3>
{/if}

<style>
  .details {
    margin: 0 0 10px 25px;
    font-size: 14px;
    display: none;
    max-width: 400px;
  }

  .details * {
    text-align: left;
  }

  .performance-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .performance-info:hover .details, .performance-info:focus .details {
    display: block;
  }

  .no-info {
    margin-left: 25px;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .selected {
    padding: 5px;
    margin-right: 5px;
    height: 20px;
    fill: var(--grey);
  }

  .performance-info:focus .selected, .performance-info:hover .selected {
    fill: var(--red);
  }
</style>