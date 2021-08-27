<script>

</script>

<div class='frame'>
  <div class='screen'>
    <slot></slot>
  </div>
</div>

<style>
  .frame {
		position: relative;
		display: flex;
		flex: 1;
		padding: 30px 100px;
		border-radius: 20px;
		border-top: 15px solid var(--light-olive);
		border-right: 15px solid var(--light-olive);
		border-bottom: 15px solid var(--dark-olive);
		border-left: 15px solid var(--dark-olive);
	}

  .screen {
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
		border-radius: 70px;
	}

	.screen::after {
		position: absolute;
		height: 100%;
		width: 100%;
		content: "";
		background-image: url('/images/lines.jpg');
		filter: sepia(100%) saturate(700%) contrast(2500%) hue-rotate(-50deg);
		opacity: 0.05;
		background-size: 80px;
		border-radius: 70px;
	}

  @media (max-width: 1100px) {
		.frame {
			padding: 30px 60px;
		}
  }

  @media (max-width: 800px) {
		.frame {
			padding: 30px 30px;
		}
	}

  @media (max-width: 500px) {
		.frame {
			padding: 10px;
			border-top: 5px solid var(--light-olive);
			border-right: 5px solid var(--light-olive);
			border-bottom: 5px solid var(--dark-olive);
			border-left: 5px solid var(--dark-olive);
		}

		.screen {
			border-top: 5px solid var(--dark-olive);
			border-right: 5px solid var(--dark-olive);
			border-bottom: 5px solid var(--light-olive);
			border-left: 5px solid var(--light-olive);
			border-radius: 40px;
		}

		.screen::after {
			border-radius: 40px;
		}
  }
</style>