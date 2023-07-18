import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [btnState, setBtnState] = useState(true);
  const handleState = () => {
    setBtnState(!btnState);
  };
  return (
    <div>
      <Header />
      {!btnState && <Form handleState={ handleState } />}
      {btnState && <button onClick={ handleState }>Cadastrar nova senha</button>}
    </div>
  );
}

export default App;
