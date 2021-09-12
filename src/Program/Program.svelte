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
  <h1>Program</h1>

  {#if programInfo}
    <div class='location'>
      <h2>{programInfo.location}</h2>
      <h3>
        {programInfo.date}
      </h3>
      {#if programInfo.venue}
        {#if programInfo.venue.link}
          <h3>
            <Link href={programInfo.venue.link} text={programInfo.venue.name}/>
          </h3>
        {:else}
          <h3>
            {programInfo.venue.name}
          </h3>
        {/if}
      {/if}
    </div>

    {#each programInfo.events as event}
      <Event {event} />
    {/each}
  {/if}
</div>
