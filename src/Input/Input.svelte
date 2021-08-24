<script>
  import page from 'page'

  let input

  const submit = () => {
    switch(input.toUpperCase()) {
      case 'H':
      case 'HOME': 
        page('/home')
        break
      case 'S':
      case 'SCHEDULE':
        page('/schedule')
        break
    }

    input = ''
  }
</script>

<div>
  <p>$:</p>
  <form on:submit|preventDefault={submit}>
    <input type='text' autofocus bind:value={input}>
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