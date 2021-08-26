<script>
	import Typewriter from '../typewriter'
  import Button from '../shared_components/Button.svelte'
  import { cities } from '../ascii'
  export let cityKey

  let cityInfo
  
  const setCityInfo = (cityKey) => {
    cityInfo = null
    setTimeout(() => {
      cityInfo = cities[cityKey]
    }, 1)
  }

  $: setCityInfo(cityKey)
</script>

<div class='location'>
  {#if cityInfo}
    <div class='heading'>
      <h1 in:Typewriter.type={{speed: 1}}>{cityInfo.name}</h1>
      <h2 in:Typewriter.type={{speed: 10}}>{cityInfo.country}</h2>
    </div>
    <h3 in:Typewriter.type={{speed: 10}}>{cityInfo.date}</h3>
    <div class='links'>
      <Button 
        name='[I] In-Person Tickets' 
        href='https://www.google.com' 
        keyCode='73' 
        external
        autofocus />
      <Button 
        name='[L] Live Stream Tickets' 
        href='/rotterndam-haarlem-amsterdam'
        keyCode='76' 
        external />
      <Button 
        name='[P] Program'
        href='/{cityKey}/program'
        keyCode='80' />
    </div>
  {/if}
</div>

<style>
  .location {
    z-index: 1;
		overflow: scroll;
  }

  .heading {
    display: flex;
    flex-wrap: wrap;
  }
  h3 {
    margin-bottom: 20px;
  }

  .links {
    display: flex;
    flex-direction: column;
  }
</style>