<script>
	import page from 'page'
	
	import Home from './Home/Home.svelte'
	import Schedule from './Schedule/Schedule.svelte'
	import Input from './Input/Input.svelte'

	let component = Home
	
	page('', () => component = Home)
	page('/schedule', () => component = Schedule)
	page('*', () => component = Home)
	page.start()
</script>

<main>
	<div>
		<svelte:component this={component} />
		<Input />
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		height: 100%;
	}

	main::after {
		position: absolute;
		height: 100%;
		width: 100%;
		content: "";
		background-image: url('/images/plastic.jpg');
		opacity: 0.3;
		background-size: 200px;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 1100px;
		flex: 1;
		border: 7px solid var(--grey);
		background-color: var(--dark-grey);
		margin: 20px;
		padding: 20px;
		border-radius: 20px;
		z-index: 1;
	}
</style>