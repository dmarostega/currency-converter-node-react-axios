import './App.css';
import Home from './pages/Home';
import logo from './assets/logo.png'

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
          <div style={{padding: '1em'}}>
            <img  src={logo} width={'80px'} height={'80px'} style={{borderRadius: '50%'}}/>
          </div>
          <h1>Conversor de Moedas</h1>            
      </header>
      <div className="App-body">
        <Home />
      </div>
    </div>
  );
}

export default App;
