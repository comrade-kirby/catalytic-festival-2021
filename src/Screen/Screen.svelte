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
		justify-content: center;
		flex: 1;
		padding: 30px 100px;
		background-color: black;
	}

  .screen {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		background-color: lightgrey;
		border-radius: 40px;
		overflow: hidden;
		padding: 60px 60px 20px;
		max-width: 1100px;
	}

  @media (max-width: 1100px) {
		.frame {
			padding: 30px 60px;
		}

		.screen {
			padding: 30px 30px 10px;
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
		}

		.screen {
			padding: 15px 15px 5px;
		}
  }
</style>