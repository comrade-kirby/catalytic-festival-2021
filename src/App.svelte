<script>
	import page from 'page'
	
	import Screen from './Screen/Screen.svelte'
	import Home from './Home/Home.svelte'
	import Stream from './Stream/Stream.svelte'
	import Nav from './Nav/Nav.svelte'
	import Location from './Location/Location.svelte'
	import Program from './Program/Program.svelte'
	import { moveFocus, navigate } from './helpers.js'

	let component = Home
	let cityKey
	
	page('', () => component = Home)
	page('/stream', () => component = Stream)
	page('/:city', ctx => {
		component = Location
		cityKey = ctx.params.city
	})
	page('/:city/program', ctx => {
		component = Program
		cityKey = ctx.params.city
	})
	page.start()
	page.exit('*', (ctx, next) => {
  	window.scroll(0, 0)
 	 	next()
	})

	const keydown = e => {
		moveFocus(e)
		navigate(e, page)
	}

</script>

<main on:keydown={keydown}>
	<Screen>
		<div class='content'>
			<svelte:component this={component} {cityKey} />
		</div>
		<Nav />
	</Screen>
</main>

<style>
	main {
		position: relative;
		display: flex;
		justify-content: center;
		height: 100%;
		background-color: var(--olive);
	}

	main::before {
		position: absolute;
		height: 100%;
		width: 100%;
		content: "";
		background-image: url('/images/plastic.jpg');
		filter: contrast(500%);
		opacity: 0.1;
		background-size: 100px;
	}

	.content {
		z-index: 1;
		padding-bottom: 15px;
		overflow-y: scroll;
	}

	@media (max-width: 1100px) {
		.content {
			padding-bottom: 5px;
		}
	}

	@media (max-width: 500px) {
		.content {
			padding: 15px 15px 5px;
		}
	}
</style>