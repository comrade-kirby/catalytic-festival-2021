<script>
  export let cityKey
  import programs from '../programs.js'
  import { programTitle } from '../ascii.js'

  let programInfo 

  const setProgramInfo = (cityKey) => {
    programInfo = null
    setTimeout(() => {
      programInfo = programs[cityKey]
    }, 1)
  }

  $: setProgramInfo(cityKey)
</script>

<div class='program'>
  <h1>{programTitle}</h1>

  {#if programInfo}
    <div class='location'>
      <p>{programInfo.location}</p>
      <p class='small'>dates: {programInfo.date}</p>
      {#if programInfo.venue}
        <p class='small'>venue: {programInfo.venue}</p>
      {/if}
      {#if programInfo.audience}
        <p class='small'>projected attendance: {programInfo.audience}</p>
      {/if}
    </div>
    
    {#each programInfo.events as event}
      <div class='event'>
        {#if event.date}
          <p>{event.date}</p>
        {/if}
        {#if event.location}
          <p class='small'>city: {event.location}</p>
        {/if}
        {#if event.venue}
          <p class='small'>venue: {event.venue}</p>
        {/if}
        {#if event.address}
          <p class='small'>address: {event.address}</p>
        {/if}
        {#if event.audience}
          <p class='small'>projected attendance: {event.audience}</p>
        {/if}
        <p class='lineup-heading'>lineup:</p>
        <div class='lineup'>
          {#each event.performances as performance}
            <p class='small'>- {performance}</p>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
</div>

<style>
  .program {
    z-index: 1;
  }

  .location {
    margin-bottom: 20px;
  }

  .event {
    margin-bottom: 20px;
    margin-left: 20px;
  }

  .small {
    font-size: 12px;
  }

  .lineup-heading {
    margin: 10px 0 0 20px;
  }

  .lineup {
    margin-left: 30px;
  }
</style>