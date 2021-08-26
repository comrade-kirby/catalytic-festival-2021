<script>
	import page from 'page'
	
	import Home from './Home/Home.svelte'
	import Input from './Input/Input.svelte'
	import Location from './Location/Location.svelte'
	import Program from './Program/Program.svelte'
	import { moveFocus, navigate } from './helpers.js'
	import Typewriter from './typewriter';

	let component = Home
	let cityKey
	
	page('', () => component = Home)
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
		Typewriter.delay = 0
 	 	next()
	})

	const keydown = e => {
		moveFocus(e)
		navigate(e, page)
	}

</script>

<main on:keydown={keydown}>
	<div class='outer-border'>
		<div class='inner-border'>
			<svelte:component this={component} {cityKey} />
			<Input />
		</div>
	</div>
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

	.outer-border {
		position: relative;
		display: flex;
		flex: 1;
		padding: 30px 60px;
		border-radius: 20px;
		border-top: 15px solid var(--light-olive);
		border-right: 15px solid var(--light-olive);
		border-bottom: 15px solid var(--dark-olive);
		border-left: 15px solid var(--dark-olive);
	}

	.inner-border {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		border-top: 10px solid var(--dark-olive);
		border-right: 10px solid var(--dark-olive);
		border-bottom: 10px solid var(--light-olive);
		border-left: 10px solid var(--light-olive);
		box-shadow:  inset 0px 0px 20px -6px var(--dark-orange);
		background-color: var(--dark-grey);
		padding: 30px;
		border-radius: 70px;
	}

	.inner-border::after {
		position: absolute;
		height: 100%;
		width: 100%;
		content: "";
		background-image: url('/images/lines.jpg');
		filter: sepia(100%) saturate(700%) contrast(2500%);
		opacity: 0.05;
		background-size: 80px;
		margin: -30px;
		border-radius: 70px;
	}

	@media (max-width: 700px) {
		.outer-border {
			padding: 10px;
			border-top: 5px solid var(--light-olive);
			border-right: 5px solid var(--light-olive);
			border-bottom: 5px solid var(--dark-olive);
			border-left: 5px solid var(--dark-olive);
		}

		.inner-border {
			padding: 15px;
			border-top: 5px solid var(--dark-olive);
			border-right: 5px solid var(--dark-olive);
			border-bottom: 5px solid var(--light-olive);
			border-left: 5px solid var(--light-olive);
			border-radius: 40px;

		}

		.inner-border::after {
			margin: -20px;
			border-radius: 40px;
		}
	}
</style>