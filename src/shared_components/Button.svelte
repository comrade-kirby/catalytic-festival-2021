<script>
	import page from 'page'
  import { onMount } from 'svelte';
  import typewriter from '../typewriter.js'

  export let name
  export let subtext
  export let href
  export let delay
  export let autofocus = false
  
  let element 

  const setFocus = e => {
    e.target.focus()
  }

  onMount(() => {
    if (autofocus) {

      setTimeout(() => {
        element.focus()
      }, delay)
    }
  })
</script>

<button class='focasable' bind:this={element}
  on:mouseenter={setFocus} 
  on:click={() => page(href)}>
  <p class='icon'>></p>
  <div class='info'>
    <p class='location' in:typewriter={{speed: 15, delay: delay}}>{name}</p>
    <p class='date' in:typewriter={{speed: 15, delay: delay + 100}}>{subtext}</p>
  </div>
</button>

<style>
  button {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
    padding: 10px;
    align-self: flex-start;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button:focus {
    outline: none;
  }
  
  button:focus .icon {
    opacity: 1;
  }

  button:focus .location {
    background-color: var(--orange);
    box-shadow: 0 0 4px var(--dark-orange);
    color: var(--dark-grey);
  }

  .icon {
    opacity: 0;
    padding: 5px;
    margin-right: 5px;
  }

  .location {
    padding: 5px;
  }

  .date {
    font-size: 12px;
    margin-left: 10px;
  }
</style>