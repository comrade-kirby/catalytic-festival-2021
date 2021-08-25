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
      name='[V] Vienna' 
      subtext='Oct 1-3'
      href='/vienna'
      keyCode='86' 
      delay={700} autofocus />
    <Button 
      name='[R] Rotterndam, Haarlem, Amsterdam' 
      subtext='Oct 8-10' 
      href='/rotterndam-haarlem-amsterdam'
      keyCode='82' 
      delay={900} />
    <Button 
      name='[C] Chicago' 
      subtext='Oct 14, 15-17' 
      href='/chicago'
      keyCode='67' 
      delay={1100} />
    <Button 
      name='[N] New York'
       subtext='Oct 23, 24' 
       href='/new-york'
       keyCode='78' 
       delay={1300}  />
    <Button 
      name='[T] Trondheim' 
      subtext='Oct 30-31' 
      href='/trondheim'
      keyCode='84' 
      delay={1500} />
    <Button 
      name='[W] Washington D.C.' 
      subtext='Oct 30-31' 
      href='/washington-dc'
      keyCode='87' 
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