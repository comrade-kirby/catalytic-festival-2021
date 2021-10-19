<script>
  import page from 'page'

  let h
  let w

  const setFocus = e => {
    e.target.focus()
  }
</script>

<div class='nav' bind:clientHeight={h} bind:clientWidth={w}>
  <div class='secondary-buttons'>
    <button id='72'
      on:mouseenter={setFocus}
      on:click|preventDefault={() => page('/')}>
        <h3>home</h3>
    </button>
    <h3> | </h3>
    <button id='66'
      on:mouseenter={setFocus}
      on:click|preventDefault={() => history.back()}>
      <h3>back</h3>
    </button>
  </div>
  <a id='83' class='stream'
    target='_blank' href='https://catalytic-sound.bandcamp.com/merch/catalytic-sound-festival-2021-nyc-day-1' >
    <h2>stream</h2>
  </a>
</div>

<style>
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 1;
  }

  .secondary-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .stream {
    position: relative;
    padding: 6px 20px;
    margin: 10px;
    background-color: var(--red);
    border-radius: 15px;
    text-decoration: none;
  }

  h2 {
    position: relative;
    color: white;
    text-align: center;
    z-index: 1;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 5px;
    margin: 0 10px;
    text-decoration: none;
    cursor: pointer;
  }

  .secondary-buttons button:hover, .secondary-buttons button:focus {
    outline: none;
  }

  .secondary-buttons button:hover h3, .secondary-buttons button:focus h3 {
    color: var(--red);
  }

  .stream:focus, .stream:hover {
    background-color: var(--light-red);
    outline: none;
  }
</style>
