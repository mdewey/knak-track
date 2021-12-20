import './App.css';
import LayOnHands from './LayOnHands';
import Panache from './Panache';
import RoundTracker from './RoundTracker';
import Smites from './Smites';

function App() {
  return (
    <div className="App">
      <h1>Sir Knak the Divine Joke Apsu</h1>
      <main className="trackers">
        <RoundTracker />
        <Panache />
        <Smites />
        <LayOnHands />
      </main>
    </div>
  );
}

export default App;
