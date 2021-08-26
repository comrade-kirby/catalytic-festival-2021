<script>
	import Typewriter from '../typewriter'
  import Button from '../shared_components/Button.svelte'
  import { cataliticStreamingFestival } from '../ascii.js'
</script>

<div class='home'>
  <h1 in:Typewriter.type={{speed: 1}}>{cataliticStreamingFestival}</h1>
  <h2 in:Typewriter.type={{speed: 10}}>October 2020</h2>
  <div class='locations'>
    <Button 
      name='[V] Vienna' 
      subtext='Oct 1-3'
      href='/vienna'
      keyCode='86' autofocus />
    <Button 
      name='[R] Rotterndam, Haarlem, Amsterdam' 
      subtext='Oct 8-10' 
      href='/rotterndam-haarlem-amsterdam'
      keyCode='82' />
    <Button 
      name='[C] Chicago' 
      subtext='Oct 14, 15-17' 
      href='/chicago'
      keyCode='67' />
    <Button 
      name='[N] New York'
       subtext='Oct 23, 24' 
       href='/new-york'
       keyCode='78'   />
    <Button 
      name='[T] Trondheim' 
      subtext='Oct 30-31' 
      href='/trondheim'
      keyCode='84' />
    <Button 
      name='[W] Washington D.C.' 
      subtext='Oct 30-31' 
      href='/washington-dc'
      keyCode='87' />
  </div>
</div>
  
<style>
  .home {
    display: flex;
    flex-direction: column;
		overflow: scroll;
    z-index: 1;
  }

  h2 {
    margin-bottom: 20px;
  }

  .locations {
    display: flex;
    flex-direction: column;
  }
</style>