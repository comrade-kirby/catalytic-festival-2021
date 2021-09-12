<script>
  import Link from '../shared_components/Link.svelte'
  import Event from './Event/Event.svelte'
  import programs from '../programs.js'

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

  {#if programInfo}
    <div class='location'>
      {#if programInfo.venue}
        {#if programInfo.venue.link}
          <h2>
            <Link href={programInfo.venue.link} text={programInfo.venue.name}/>
          </h2>
        {:else}
          <h2>
            {programInfo.venue.name}
          </h2>
        {/if}
      {/if}
    </div>

    {#each programInfo.events as event}
      <Event {event} />
    {/each}
  {/if}
</div>
