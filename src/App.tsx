import './App.css';
import Panache from './Panache';
import RoundTracker from './RoundTracker';

function App() {
  return (
    <div className="App">
      <h1>Sir Knak the Divine Joke Apsu</h1>
      <main className="trackers">
        <RoundTracker />
        <Panache />
      </main>
    </div>
  );
}

export default App;
