
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
</style>

function App() {

  return (
    <body>
<div className="App">
      <div class = "Title">
      <h1 class = "title-text">SEXTANT</h1>
      <p class = "title-paragraph">Sextant is a locally hosted single-page application meant to assist field technicians in their day-to-day.</p>
      </div>

      <div class = "Card1">
        <div class = "card-body">
          <h4 class = "card-title">Public IPv4 Address</h4>
          <p id = "ipv4"></p>
        </div>
      </div>

      <div class = "Card2">
        <div class = "card-body">
        <h4 class = "card-title">Public IPv6 Address</h4>
          <p id = "ipv6"></p>
        </div>
      </div>

      <div class = "Card3">
        <div class = "card-body">
          <h4 class = "card-title">Packet Latency from Pylon</h4>
          <p><pylon/></p>
        </div>
      </div>
    </div>
    </body>
    
  );
}

fetch('https://api.ipify.org/?format=json')
.then(results => results.json())
.then (data => (document.getElementById("ipv4").innerHTML = data.ip));

fetch('https://api64.ipify.org?format=json')
.then(results => results.json())
.then (data => (document.getElementById("ipv6").innerHTML = data.ip));


export default App;
