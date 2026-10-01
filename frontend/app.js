const root = document.getElementById("root");

root.innerHTML = `
<div class="app">

<div class="header">
    <h1>MTON Mining</h1>
    <p>Telegram Mini App</p>
</div>

<div class="balance-card">
    <span>Total Balance</span>
    <h2>0.000000 MTON</h2>
</div>


<div class="mining-card">

<h3>Mining Status</h3>

<div class="circle">
    <button id="mineBtn">START</button>
</div>

<p id="status">Mining stopped</p>

</div>


<div class="info">

<div class="box">
<h4>Mining Speed</h4>
<p>0.01 MTON/h</p>
</div>

<div class="box">
<h4>User ID</h4>
<p>#000001</p>
</div>

</div>


<div class="wallet">
<h3>Wallet</h3>
<p>Connect your wallet</p>
</div>


<div class="menu">

<div>⛏ Mine</div>
<div>👛 Wallet</div>
<div>👥 Friends</div>
<div>⚙ Settings</div>

</div>


</div>
`;


let mining = false;

document.getElementById("mineBtn").onclick = function(){

    mining = !mining;

    if(mining){
        this.innerHTML="STOP";
        document.getElementById("status").innerHTML="Mining started...";
    }
    else{
        this.innerHTML="START";
        document.getElementById("status").innerHTML="Mining stopped";
    }

};
