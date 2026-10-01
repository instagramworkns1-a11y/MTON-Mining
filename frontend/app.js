const root = document.getElementById("root");

root.innerHTML = `
<div class="app">

  <div class="header">
    <h1>MTON Mining</h1>
    <p>Telegram Mini App</p>
  </div>


  <div class="balance-card">
    <h3>My Asset Holding</h3>
    <h2>0.000000 MTON</h2>
    <p>Total Balance</p>
  </div>


  <div class="miner-card">

    <h2>Level 1 Miner</h2>

    <div class="status">
      ACTIVE
    </div>

    <h1>
      0.000000 MTON
    </h1>

    <p>
      Mining Reward
    </p>

    <div class="speed">
      ⚡ Speed: 1.00 MTON/hour
    </div>

    <button>
      CLAIM
    </button>

  </div>


  <div class="nav">

    <div>
      📋
      <span>Tasks</span>
    </div>

    <div>
      ⚡
      <span>Miners</span>
    </div>

    <div class="active">
      ⛏️
      <span>Mine</span>
    </div>

    <div>
      👥
      <span>Friends</span>
    </div>

    <div>
      💼
      <span>Wallet</span>
    </div>

  </div>


</div>
`;
