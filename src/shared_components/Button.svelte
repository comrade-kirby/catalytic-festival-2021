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
  <a class='focusable' id={keyCode} 
  bind:this={element} {href} 
  target="_blank"
  on:mouseenter={setFocus} >
    <svg class='selected' viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50"></circle>
    </svg>
    <h2 class='name' in:Typewriter.type={{speed: 5}}>{name + ' >'}</h2>
    {#if subtext}
      <p class='subtext' in:Typewriter.type={{speed: 5}}>{subtext}</p>
    {/if}
  </a>
{:else}
  <button class='focusable' id={keyCode} bind:this={element}
  on:mouseenter={setFocus} 
  on:click={() => page(href)}>
    <svg class='selected' viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50"></circle>
    </svg>
    <h2 class='name' in:Typewriter.type={{speed: 5}}>{name}</h2>
    {#if subtext}
      <p class='subtext' in:Typewriter.type={{speed: 5}}>{subtext}</p>
    {/if}
  </button>
{/if}

<style>
  button, a {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: transparent;
    border: none;
    align-self: flex-start;
    text-decoration: none;
    cursor: pointer;
  }

  button:focus, a:focus {
    outline: none;
  }
  
  .selected {
    visibility: hidden;
    padding: 5px;
    margin-right: 5px;
    height: 20px;
    fill: red;
  }

  button:focus .selected, a:focus .selected {
    visibility: visible;
  }

  .name {
    padding: 5px;
    font-weight: bold;
    text-align: left;
  }

  .subtext {
    margin-left: 10px;
    color: white;
  }

  button:focus .subtext, a:focus .subtext {
    color: red;
  }
</style>