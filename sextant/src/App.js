
import './App.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
</style>

function App() {

  return (
    <div className="App">
      <div class = "Title">
      <h1 class = "title-text">SEXTANT</h1>
      <p class = "title-paragraph">Sextant is a locally hosted single-page application meant to assist field technicians in their day-to-day.</p>
      </div>

      <div class = "Card1">
        <div class = "card-body">
          <h4 class = "card-title">Card 1</h4>
          <h6 class = "card-subtitle">This is Card 1</h6>
          <p class = "card-text">This is Card 1 out of 3</p>
        </div>
      </div>

      <div class = "Card2">
        <div class = "card-body">
          <h4 class = "card-title">Card 2</h4>
          <h6 class = "card-subtitle">This is Card 2</h6>
          <p class = "card-text">This is Card 2 out of 3</p>
        </div>
      </div>

      <div class = "Card3">
        <div class = "card-body">
          <h4 class = "card-title">Card 3</h4>
          <h6 class = "card-subtitle">This is Card 3</h6>
          <p class = "card-text">This is Card 3 out of 3</p>
        </div>
      </div>

    </div>
  );
}

export default App;
