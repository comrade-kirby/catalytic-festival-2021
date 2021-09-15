<script>
  import Button from '../shared_components/Button.svelte'
  import { cities } from '../locations.js'
</script>

<div class='home'>
  <div class='home-headings'>
    <h1>Catalytic Sound Festival</h1>
  </div>
  <h2>October 2021</h2>
  <div class='locations'>
    <Button
      name={cities.vienna.name}
      subtext={cities.vienna.date}
      href='/vienna'
      keyCode='86' autofocus />
    <Button
      name={cities['rotterdam-haarlem-amsterdam']['name']}
      subtext={cities['rotterdam-haarlem-amsterdam']['date']}
      href='/rotterdam-haarlem-amsterdam'
      keyCode='82' />
    <Button
      name={cities.chicago.name}
      subtext={cities.chicago.date}
      href='/chicago'
      keyCode='67' />
    <Button
      name={cities['new-york']['name']}
       subtext={cities['new-york']['date']}
       href='/new-york'
       keyCode='78'   />
    <Button
      name={cities.trondheim.name}
      subtext={cities.trondheim.date}
      href='/trondheim'
      keyCode='84' />
    <Button
      name={cities['washington-dc']['name']}
      subtext={cities['washington-dc']['date']}
      href='/washington-dc'
      keyCode='87' />
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

</style>
