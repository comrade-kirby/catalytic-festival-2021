<script>
  import Link from '../../shared_components/Link.svelte'
  import Performance from './Performance/Performance.svelte'
  export let event
</script>

<div class='event'>
  {#if event.location}
    <h2>
      {event.location}
    </h2>
  {/if}
  <h2>{event.date}</h2>
  {#if event.venue}
    {#if event.venue.link}
      <h2>
        <Link href={event.venue.link} text={event.venue.name} label='@'/>
      </h2>
    {:else}
      <h2>
        {'@' + event.venue.name}
      </h2>
    {/if}
  {/if}
  {#if event.link}
    <h3>
      <Link href={event.link} text={'more info + tickets for in-person show'}/>
    </h3>
  {/if}

  {#if event.livestreamLink}
    <h3>
      <Link href={event.livestreamLink} text={'tickets for livestream'}/>
    </h3>
  {/if}
  <br>
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
  .event h2 {
  font-weight: bold;
  }
  .event h3 {
  color: grey;
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
      margin-top: 10px;
      margin-left: 15px;
    }
  }
</style>
