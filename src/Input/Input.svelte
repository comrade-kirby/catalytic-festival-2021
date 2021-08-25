<script>
  import page from 'page'

  let input

  const submit = () => {
    switch(input.toUpperCase()) {
      case 'H':
      case 'HOME': 
        page('/')
        break
      case 'V':
      case 'VIENNA':
        page('/vienna')
        break
      case 'R':
      case 'ROTTERNDAM':
        page('/rotterndam-haarlem-amsterdam')
        break
      case 'C':
      case 'CHICAGO':
        page('/chicago')
        break
      case 'N':
      case 'NEW YORK':
        page('/new-york')
        break
      case 'T':
      case 'TRONDHEIM':
        page('/trondheim')
        break
      case 'W':
      case 'WASHINGTON':
        page('/washington-dc')
        break
    }

    input = ''
  }
</script>

<div>
  <p>$:</p>
  <form on:submit|preventDefault={submit}>
    <input type='text' class='focasable' autofocus bind:value={input}>
  </form>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
  }

  input {
    flex: 1;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    border: none;
    justify-self: flex-end;
  }
  
  input:focus{
    outline: none;
  }
</style>