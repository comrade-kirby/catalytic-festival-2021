<script>
  import Link from '../../shared_components/Link.svelte'
  import Performance from './Performance/Performance.svelte'
  export let event
</script>

<div class='event'>
  {#if event.link}
    <h2>
      <Link href={event.link} text={event.date}/>
    </h2>
  {:else}
    <h2>{event.date}</h2>
  {/if}
  {#if event.location}
    <p>
      {'city: ' + event.location}
    </p>
  {/if}
  {#if event.venue}
    {#if event.venue.link}
      <p>
        <Link href={event.venue.link} text={event.venue.name} label='venue' />
      </p>
    {:else}
      <p>
        {'venue: ' + event.venue.name}
      </p>
    {/if}
  {/if}
  {#if event.audience}
    <p>
      {'projected attendance: ' + event.audience}
    </p>
  {/if}
  <h2 class='lineup-heading'>lineup:</h2>
  <div class='lineup' >
    {#each event.performances as performance}
      <Performance {performance} />
    {/each}
  </div>
</div>

<style>
  .event {
    margin-top: 20px;
    margin-left: 20px;
  }

  .lineup-heading {
    margin-top: 10px;
    margin-left: 20px;
  }

  .lineup {
    margin-left: 30px;
  }

  @media (max-width: 700px) {
    .event {
      margin-top: 14px;
      margin-left: 10px;
    }

    .lineup-heading {
      margin-left: 10px;
    }

    .lineup {
      margin-left: 15px;
    }
  }
</style>
