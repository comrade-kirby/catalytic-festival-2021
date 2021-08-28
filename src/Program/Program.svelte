<script>
  import Link from '../shared_components/Link.svelte'
  import Event from './Event/Event.svelte'
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

<div>
  <input type='button' class='hidden' autofocus >
  <h1 in:Typewriter.type={{speed: 1}}>{programTitle}</h1>

  {#if programInfo}
    <div class='location'>
      <h2 in:Typewriter.type={{speed: 5}}>{programInfo.location}</h2>
      <h3 in:Typewriter.type={{speed: 5}}>
        {'dates: ' + programInfo.date}
      </h3>
      {#if programInfo.venue}
        {#if programInfo.venue.link}
          <h3>
            <Link href={programInfo.venue.link} text={programInfo.venue.name}/>
          </h3>
        {:else}
          <h3 in:Typewriter.type={{speed: 5}}>
            {'venue: ' + programInfo.venue.name}
          </h3>
        {/if}
      {/if}
      {#if programInfo.audience}
        <h3 in:Typewriter.type={{speed: 5}}>
          {'projected attendance: ' + programInfo.audience}
        </h3>
      {/if}
    </div>
    
    {#each programInfo.events as event}
      <Event {event} />
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
</style>