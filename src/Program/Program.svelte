<script>
  import Typewriter from '../typewriter'
  import programs from '../programs.js'
  import { programTitle } from '../ascii.js'
  
  export let cityKey
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
  <input class='hidden' autofocus >
  <h1 in:Typewriter.type={{speed: 1}}>{programTitle}</h1>

  {#if programInfo}
    <div class='location'>
      <h2 in:Typewriter.type={{speed: 5}}>{programInfo.location}</h2>
      <h3 in:Typewriter.type={{speed: 5}}>
        {'dates: ' + programInfo.date}
      </h3>
      {#if programInfo.venue}
        <h3 in:Typewriter.type={{speed: 5}}>
          {'venue: ' + programInfo.venue}
        </h3>
      {/if}
      {#if programInfo.audience}
        <h3 in:Typewriter.type={{speed: 5}}>
          {'projected attendance: ' + programInfo.audience}
        </h3>
      {/if}
    </div>
    
    {#each programInfo.events as event}
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
          <p in:Typewriter.type={{speed: 5}}>
            {'venue: ' + event.venue}
          </p>
        {/if}
        {#if event.address}
          <p in:Typewriter.type={{speed: 5}}>
            {'address: ' + event.address}
          </p>
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
    {/each}
  {/if}
</div>

<style>
  .hidden {
    max-height: 0;
    max-width: 0;
    opacity: 0;
    position: absolute;
  }
  .program {
    z-index: 1;
		overflow: scroll;
  }

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