<script>
	import typewriter from '../typewriter'
</script>

<div class='home'>
  <h1 in:typewriter={{speed: 0.5}}> 
╔═══╗      ╔╗      ╔╗       ╔╗           ╔═══╗              ╔╗     ╔═══╗         ╔╗            ╔╗ 
║╔═╗║     ╔╝╚╗     ║║      ╔╝╚╗          ║╔═╗║              ║║     ║╔══╝        ╔╝╚╗           ║║ 
║║ ╚╝╔══╗ ╚╗╔╝╔══╗ ║║ ╔╗ ╔╗╚╗╔╝╔╗╔══╗    ║╚══╗╔══╗╔╗╔╗╔═╗ ╔═╝║     ║╚══╗╔══╗╔══╗╚╗╔╝╔╗╔╗╔╗╔══╗ ║║ 
║║ ╔╗╚ ╗║  ║║ ╚ ╗║ ║║ ║║ ║║ ║║ ╠╣║╔═╝    ╚══╗║║╔╗║║║║║║╔╗╗║╔╗║     ║╔══╝║╔╗║║══╣ ║║ ╠╣║╚╝║╚ ╗║ ║║ 
║╚═╝║║╚╝╚╗ ║╚╗║╚╝╚╗║╚╗║╚═╝║ ║╚╗║║║╚═╗    ║╚═╝║║╚╝║║╚╝║║║║║║╚╝║    ╔╝╚╗  ║║═╣╠══║ ║╚╗║║╚╗╔╝║╚╝╚╗║╚╗
╚═══╝╚═══╝ ╚═╝╚═══╝╚═╝╚═╗╔╝ ╚═╝╚╝╚══╝    ╚═══╝╚══╝╚══╝╚╝╚╝╚══╝    ╚══╝  ╚══╝╚══╝ ╚═╝╚╝ ╚╝ ╚═══╝╚═╝
                      ╔═╝║                                                                        
                      ╚══╝                                                  
  </h1>
  <h2 in:typewriter={{speed: 1, delay: 400}}>
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▄░█▀▄▀█▄░▄█▀▄▄▀█░▄▄▀█░▄▄█░▄▄▀███░▄░█░▄▄░█░▄░█▀░█
██░███░█░█▀██░██░██░█░▄▄▀█░▄▄█░▀▀▄████▀▄█░▀▄░██▀▄██░█
██░▀▀▀░██▄███▄███▄▄██▄▄▄▄█▄▄▄█▄█▄▄███░▀▀█░▀▀░█░▀▀█▀░▀
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
  </h2>
  <div class='locations'>
    <button>
      <p class='icon'>></p>
      <div class='info'>
        <p class='location' in:typewriter={{speed: 15, delay: 700}}>[V]ienna</p>
        <p class='date' in:typewriter={{speed: 15, delay: 800}}>Oct 1-3 </p>
      </div>
    </button>
    <button>
      <p class='icon'>></p>
      <div class='info'>
        <p class='location' in:typewriter={{speed: 15, delay: 900}}>[R]otterndam</p>
        <p class='date' in:typewriter={{speed: 15, delay: 1000}}>Oct 8-10</p>
      </div>
    </button>
    <button>
      <p class='icon'>></p>
      <div class='info'>
        <p class='location' in:typewriter={{speed: 15, delay: 1100}}>[C]hicago</p>
        <p class='date' in:typewriter={{speed: 15, delay: 1200}}>Oct 14, 15-17</p>
      </div>
    </button> 
    <button>
      <p class='icon'>></p>
      <div class='info'>
        <p class='location' in:typewriter={{speed: 15, delay: 1300}}>[N]ew York</p>
        <p class='date' in:typewriter={{speed: 15, delay: 1400}}>Oct 23, 24</p>
      </div>
    </button>
    <button>
      <p class='icon'>></p>
      <div class='info'>
        <p class='location' in:typewriter={{speed: 15, delay: 1500}}>[T]rondheim</p>
        <p class='date' in:typewriter={{speed: 15, delay: 1600}}>Oct 30-31</p>
      </div>
    </button>
    <button>
      <p class='icon'>></p>
      <div class='info'>
        <p class='location' in:typewriter={{speed: 15, delay: 1700}}>[W]ashington D.C.</p>
        <p class='date' in:typewriter={{speed: 15, delay: 1800}}>Oct 30-31</p>
      </div>
    </button>
  </div>
</div>
  

<style>
  .home {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 10px;
  }

  .locations {
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    background-color: transparent;
    border: none;
    padding: 10px;
    align-self: flex-start;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  button:focus {
    outline: none;
  }
  
  button:hover .icon, button:focus .icon {
    opacity: 1;
  }

  button:hover .location, button:focus .location {
    background-color: var(--orange);
    box-shadow: 0 0 4px var(--dark-orange);
    color: var(--dark-grey);
  }

  .icon {
    opacity: 0;
    padding: 5px;
    margin-right: 5px;
  }

  .location {
    padding: 5px;
  }

  .date {
    font-size: 12px;
    margin-left: 10px;
  }


</style>