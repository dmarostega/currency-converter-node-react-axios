import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        setUsuarios(res.data);
      })
      .catch(err => {
        console.error('Erro ao buscar usuários:', err);
      });
  }, []);

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <article>
      <div>
      <h1>Usuários</h1>
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.nome}</li>
          ))}
        </ul>
      </div>
      </article>
    </div>
  );
}

export default App;
