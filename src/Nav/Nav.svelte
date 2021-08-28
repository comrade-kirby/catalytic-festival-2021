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
        <h3>[H] Home</h3>
    </button>
    <h3> | </h3>
    <button id='66' 
      on:mouseenter={setFocus} 
      on:click|preventDefault={() => history.back()}>
      <h3>[B] Back</h3>
    </button>
  </div>
  <button id='83' class='stream' 
    on:click|preventDefault={() => page('/stream')}>
    <svg>
      <polygon points="{h/2},0 {w},0 {w},{h} 0,{h}" />
    </svg>
    <h2>[S] Stream</h2>
  </button>
</div>

<style>
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
  }

  .secondary-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 3;
  }

  .stream {
    position: relative;
    padding: 30px 30px 30px 60px;
    flex-grow: 1;
    margin: 0;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    fill: none;
    fill: var(--transparent-orange);
    stroke: var(--orange);
    filter: drop-shadow( 0px 0px 10px var(--dark-orange));
  }

  h2 {
    position: relative;
    color: var(--dark-grey);
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
    background-color: var(--orange);
    box-shadow: 0 0 4px var(--dark-orange);
    outline: none;
  }

  .secondary-buttons button:hover h3, .secondary-buttons button:focus h3 {
    color: var(--dark-grey);
  }

  .stream:focus {
    outline: none;
  }
  
  .stream:hover svg, .stream:focus svg{
    fill: var(--orange);
  }

  @media (max-width: 500px) {

    .stream {
      position: relative;
      padding: 15px 15px 15px 30px;
      flex-grow: 1;
      margin: 0;
    }
  }
</style>