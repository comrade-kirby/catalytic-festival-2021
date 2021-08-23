
<div>
  <p>$:</p>
  <input type="text" autofocus>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
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