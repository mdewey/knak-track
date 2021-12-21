import './App.css';
import LayOnHands from './LayOnHands';
import Panache from './Panache';
import RoundTracker from './RoundTracker';
import Smites from './Smites';
import Spells from './Spells';

function App() {
  return (
    <div className="App">
      <main className="trackers">
        <h1>Sir Knak the Divine Joke Apsu</h1>
        <RoundTracker />
        <Panache />
        <Spells />
        <Smites />
        <LayOnHands />
      </main>
    </div>
  );
}

export default App;
