<script>
  import Link from '../../shared_components/Link.svelte'
  import Typewriter from '../../typewriter.js'
  export let event
</script>

<div class='event'>
  {#if event.date}
    <h2 in:Typewriter.type={{speed: 5}}>{event.date}</h2>
  {/if}
  {#if event.location}
    <p in:Typewriter.type={{speed: 5}}>
      {'city: ' + event.location}
    </p>
  {/if}
  {#if event.venue}
    {#if event.venue.link}
      <p>
        <Link href={event.venue.link} text={event.venue.name} />
      </p>
    {:else}
      <p in:Typewriter.type={{speed: 5}}>
        {'venue: ' + event.venue.name}
      </p>
    {/if}
  {/if}
  {#if event.audience}
    <p in:Typewriter.type={{speed: 5}}>
      {'projected attendance: ' + event.audience}
    </p>
  {/if}
  <h2 class='lineup-heading' in:Typewriter.type={{speed: 5}}>lineup:</h2>
  <div class='lineup' >
    {#each event.performances as performance}
      <h3 in:Typewriter.type={{speed: 5}}>{'- ' + performance}</h3>
    {/each}
  </div>
</div>

<style>
  .event {
    margin-top: 40px;
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
      margin-top: 20px;
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