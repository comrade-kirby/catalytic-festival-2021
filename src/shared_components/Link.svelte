<script>
  export let href
  export let text
  export let label = false
</script>

{#if label}
  <p>{label + ' : '}</p>
{/if}
<a {href} class='focusable' target='_blank'> 
  {text}
</a>

<style>
  a, p {
    font-size: inherit;
    display: inline-block;
  }

  a:focus, a:hover {
    color: var(--red);
    outline: none;
  }
</style>