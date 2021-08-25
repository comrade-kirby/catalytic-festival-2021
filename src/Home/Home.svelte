<script>
	import typewriter from '../typewriter'
  import Button from '../shared_components/Button.svelte'
  import { cataliticStreamingFestival } from '../ascii.js'
</script>

<div class='home'>
  <h1 in:typewriter={{speed: 0.5}}>{cataliticStreamingFestival}</h1>
  <p in:typewriter={{speed: 15, delay: 400}}>October 2020</p>
  <div class='locations'>
    <Button 
      name='[V]ienna' 
      subtext='Oct 1-3'
      href='/vienna' 
      delay={700} autofocus />
    <Button 
      name='[R]otterndam, Haarlem, Amsterdam' 
      subtext='Oct 8-10' 
      href='/rotterndam-haarlem-amsterdam'
      delay={900} />
    <Button 
      name='[C]hicago' 
      subtext='Oct 14, 15-17' 
      href='/chicago'
      delay={1100} />
    <Button 
      name='[N]ew York'
       subtext='Oct 23, 24' 
       href='/new-york'
       delay={1300}  />
    <Button 
      name='[T]rondheim' 
      subtext='Oct 30-31' 
      href='/trondheim'
      delay={1500} />
    <Button 
      name='[W]ashington D.C.' 
      subtext='Oct 30-31' 
      href='/washington-dc'
      delay={1700} />
  </div>
</div>
  
<style>
  .home {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  p {
    margin-bottom: 40px;
  }

  .locations {
    display: flex;
    flex-direction: column;
  }
</style>