import React, {useState} from 'react';
import LeagueAccount from './components/LeagueAccount';

function App() {
  const [gameName, setGameName] = useState('');
  const [tagLine, setTagLine] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <h1>Riot Account Search</h1>
      <input
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tag Line"
        value={tagLine}
        onChange={(e) => setTagLine(e.target.value)}
      />
      <button onClick={() => setSubmitted(true)}>Search</button>

      {submitted && <LeagueAccount gameName={gameName} tagLine={tagLine} />}
    </div>
  );
}

export default App;