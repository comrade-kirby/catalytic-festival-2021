<script>
  import page from 'page'

  const setFocus = e => {
    e.target.focus()
  }
</script>

<div>
  <h3>~ </h3>
  <button id='72' 
    on:mouseenter={setFocus}
    on:click|preventDefault={() => page('/')}
    >
    <h3>[H] Home</h3>
  </button>
  <h3> | </h3>
  <button id='66' 
    on:mouseenter={setFocus} 
    on:click|preventDefault={() => history.back()}>
    <h3>[B] Back</h3>
  </button>
  <h3> ~</h3>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding-bottom: 30px;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 5px;
    margin: 0 10px;
    text-decoration: none;
  }

  button:hover {
    background-color: var(--orange);
    box-shadow: 0 0 4px var(--dark-orange);
    outline: none;
  }

  button:hover h3 {
    color: var(--dark-grey);
  }

  @media (max-width: 700px) {
    div {
      padding-bottom: 15px;
    }
  }
</style>