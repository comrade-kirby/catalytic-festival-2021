<script>
  import Typewriter from '../typewriter.js'
  export let href
  export let text

  const setFocus = e => {
    e.target.focus()
  }

</script>

<p in:Typewriter.type={{speed: 5}}>event: </p>
<a {href} class='focusable' target='_blank' 
  in:Typewriter.type={{speed: 5}}
  on:mouseenter={setFocus}>
  {text}
</a>

<style>
  a, p {
    font-size: inherit;
    display: inline-block;
  }

  a:focus {
    background-color: var(--orange);
    box-shadow: 0 0 4px var(--dark-orange);
    color: var(--dark-grey);
  }
</style>