<script>
  import { cities } from '../locations'
  import Program from '../Program/Program.svelte'
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
    <Program {cityKey} />
    <div class='links'>
      <a href='https://www.patreon.com/catalyticsound?fan_landing=true' target='_blank'>watch all US + Trondheim streams for free with a catalytic sound membership</a>
    </div>
    {#if cityInfo.presenters}
    <div class='sponsors'>
    <h3>presented by:</h3>
      <div class='sponsor-logos'>
      {#each cityInfo.presenters as presenter}
        <div class="logo">
          <img src={presenter.imgPath}>
        </div>
      {/each}
      </div>
    </div>
    {/if}
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
    margin-top: 20px;
  }
  .links a {
    padding: 6px 20px;
    margin: 10px;
    background-color: white;
    border-radius: 15px;
    text-decoration: none;
    color: var(--red);
    font-weight: bold;
  }
  @media (max-width: 800px) {
    .links a {
      padding: 0;
      text-overflow: wrap;
      border-radius: 0;
    }
  }
  .sponsors {
  margin-top: 15px;
  }
  .sponsor-logos {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .logo {
    margin-top: 5px;
    margin-right: 10px;
    width: 200px;
  }
  .logo img {
    width: 100%;
  }
</style>
