<script>
  import Button from '../shared_components/Button.svelte'
</script>

<div class='home'>
  <div class='home-headings'>
    <h1>Catalytic Sound Festival</h1>
  </div>
  <h2>October 2021</h2>
  <div class='locations'>
    <Button
      name='vienna'
      subtext='Oct 1-3'
      href='/vienna'
      keyCode='86' autofocus />
    <Button
      name='rotterdam, haarlem, amsterdam'
      subtext='Oct 8-10'
      href='/rotterndam-haarlem-amsterdam'
      keyCode='82' />
    <Button
      name='chicago'
      subtext='Oct 14, 15-17'
      href='/chicago'
      keyCode='67' />
    <Button
      name='new york'
       subtext='Oct 23, 24'
       href='/new-york'
       keyCode='78'   />
    <Button
      name='trondheim'
      subtext='Oct 30-31'
      href='/trondheim'
      keyCode='84' />
    <Button
      name='washington d.c.'
      subtext='Oct 30-31'
      href='/washington-dc'
      keyCode='87' />
  </div>
  <div class='sponsors'>
  <h3>presented by:</h3>

  </div>
</div>

<style>
  .home {
    display: flex;
    flex-direction: column;
  }

  .home-headings {
    display: flex;
    flex-wrap: wrap;
  }

  h2 {
    margin-bottom: 40px;
    color: white;
  }
  h3 {
  color: white;
  }

  .locations {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .sponsors {
  display:flex;
  flex-direction: row;
  }
</style>
