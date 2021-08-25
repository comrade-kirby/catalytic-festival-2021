<script>
	import typewriter from '../typewriter'
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

<div>
  {#if cityInfo}
    <h1 in:typewriter={{speed: 1}}>{cityInfo.name}</h1>
    <p in:typewriter={{speed: 15, delay: 200}}>{cityInfo.date}</p>
    <div class='links'>
      <Button 
        name='[I] In-Person Tickets' 
        href='https://www.google.com' 
        keyCode='73' 
        external
        delay={700} autofocus />
      <Button 
        name='[L] Live Stream Tickets' 
        href='/rotterndam-haarlem-amsterdam'
        keyCode='76' 
        external
        delay={900} />
      <Button 
        name='[P] Program'
        href='/chicago'
        keyCode='80' 
        delay={1100} />
    </div>
  {/if}
</div>

<style>
  div {
    z-index: 1;
  }

  p {
    margin-bottom: 40px;
  }

  .links {
    display: flex;
    flex-direction: column;
  }
</style>