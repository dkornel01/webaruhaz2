import './App.css';
import Kep from './komponensek/kepek.js';
import { KepekLista } from './KepekLista';
import { Termekek } from './komponensek/termekek'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képáruház</h1>
      </header>
      <section>
      <Kep src={KepekLista[0].kep} />
      </section>
      <article>
      {termekek}
      </article>
      <div class="kosár">

      </div>
      <footer>Dobrocsi Kornél</footer>
    </div>
  );
}

export default App;
