<script>
	import page from 'page'
  import { onMount } from 'svelte';
  import Typewriter from '../typewriter.js'

  export let name
  export let subtext = false
  export let external = false
  export let href
  export let keyCode
  export let autofocus = false
  
  let element 

  const setFocus = e => {
    e.target.focus()
  }

  onMount(() => {
    if (autofocus) {

      setTimeout(() => {
        element.focus()
      }, Typewriter.delay)
    }
  })
</script>

{#if external}
  <a class='focasable' id={keyCode} bind:this={element} {href} target="_blank"
  on:mouseenter={setFocus} >
    <h2 class='icon'>></h2>
    <div class='info'>
      <h2 class='name' in:Typewriter.type={{speed: 5}}>{name}</h2>
      {#if subtext}
        <p class='subtext' in:Typewriter.type={{speed: 5}}>{subtext}</p>
      {/if}
    </div>
  </a>
{:else}
  <button class='focasable' id={keyCode} bind:this={element}
  on:mouseenter={setFocus} 
  on:click={() => page(href)}>
    <h2 class='icon'>></h2>
    <div class='info'>
      <h2 class='name' in:Typewriter.type={{speed: 5}}>{name}</h2>
      {#if subtext}
        <p class='subtext' in:Typewriter.type={{speed: 5}}>{subtext}</p>
      {/if}
    </div>
  </button>
{/if}

<style>
  button, a {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
    padding: 10px;
    align-self: flex-start;
    text-decoration: none;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button:focus, a:focus {
    outline: none;
  }
  
  button:focus .icon, a:focus .icon {
    opacity: 1;
  }

  button:focus .name, a:focus .name {
    background-color: var(--orange);
    box-shadow: 0 0 4px var(--dark-orange);
    color: var(--dark-grey);
  }

  .icon {
    opacity: 0;
    padding: 5px;
    margin-right: 5px;
  }

  .name {
    padding: 5px;
  }

  .subtext {
    margin-left: 50px;
  }

  @media (max-width: 1100px) {
    button, a {
      margin-left: -15px
    }
  }
</style>