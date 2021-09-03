<script>
	import page from 'page'
  import { onMount } from 'svelte';

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

      element.focus()
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
    <h2 class='name'>{name}</h2>
    {#if subtext}
      <p class='subtext'>{subtext}</p>
    {/if}
  </a>
{:else}
  <button class='focusable' id={keyCode} bind:this={element}
  on:mouseenter={setFocus} 
  on:click={() => page(href)}>
    <svg class='selected' viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50"></circle>
    </svg>
    <h2 class='name'>{name}</h2>
    {#if subtext}
      <p class='subtext'>{subtext}</p>
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
    fill: var(--red);
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
    color: var(--red);
  }
  
  button:focus .name, a:focus .name {
    color: var(--grey);
  }
</style>