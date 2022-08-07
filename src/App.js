import TeamBox from './containers/TeamContainer';
import './App.css';

function App() {


  return (
    <div>

    <header className='App-header'>
        <h1>⚽️ An Average Football Dashboard</h1>
      <nav>
          <ul className="menu">
            <li><a href=''>The Premier League</a></li>
            <li><a href=''>Your Team</a></li>
            <li><a href=''>Settings</a></li>
          </ul>
      </nav>
    </header>
        

      <div className="App">
        <TeamBox />
      </div>
    </div>

  );
}

export default App;
