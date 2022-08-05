import TeamBox from './containers/TeamContainer';
import './App.css';

function App() {


  return (
    <div>

    <header className='App-header'>
        <h1>Your Average Football App</h1>
      <nav>
          <ul>
            <li><a href=''>The Premier League 21/22</a></li>
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
