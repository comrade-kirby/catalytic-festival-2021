<script>
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
    <div class='heading'>
      <h1>{cityInfo.name}</h1>
      <h2>{cityInfo.country}</h2>
    </div>
    <h3>{cityInfo.date}</h3>
    <div class='links'>
      <Button 
        name='in-person tickets' 
        href='https://www.google.com' 
        keyCode='73' 
        external
        autofocus />
      <Button 
        name='live stream tickets' 
        href='/rotterndam-haarlem-amsterdam'
        keyCode='76' 
        external />
      <Button 
        name='program'
        href='/{cityKey}/program'
        keyCode='80' />
    </div>
  {/if}
</div>

<style>
  .heading {
    display: flex;
    flex-wrap: wrap;
  }
  h3 {
    margin-bottom: 20px;
    color: white;
  }

  .links {
    display: flex;
    flex-direction: column;
  }
</style>