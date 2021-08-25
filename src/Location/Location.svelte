<script>
	import typewriter from '../typewriter'

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
  {/if}
</div>