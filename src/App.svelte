<script>
	import page from 'page'
	
	import Home from './Home/Home.svelte'
	import Location from './Location/Location.svelte'
	// import Schedule from './Schedule/Schedule.svelte'
	import Input from './Input/Input.svelte'

	let component = Home
	let cityKey
	
	page('', () => component = Home)
	page('/:city', ctx => {
		component = Location
		cityKey = ctx.params.city
	})
	page('*', () => component = Home)
	page.start()

	const moveFocus = e => {   

		if ([38, 40].includes(e.keyCode)) {

			const currentElement = document.activeElement			
			const focusables = document.querySelectorAll(".focasable")
			const length = focusables.length
			let currentIndex

			for (var i=0; i<focusables.length; i++) { 
				if (focusables[i] == currentElement) { 
					currentIndex = i
					break;
        }
			}

			if (e.keyCode == 40) {
				currentIndex < length - 1 
				? focusables[currentIndex + 1].focus() 
				: focusables[0].focus(); 
			} else if (e.keyCode == 38) {
				currentIndex > 0 
				? focusables[currentIndex - 1].focus() 
				: focusables[length - 1].focus(); 
			}
		}
	}

</script>

<main on:keydown={moveFocus}>
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
</style>