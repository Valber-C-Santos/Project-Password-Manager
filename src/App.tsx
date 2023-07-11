import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const [form, setForm] = useState<boolean>(false);
  const testeClick = () => {
    setForm(false);
  };
  const testeClick2 = () => {
    setForm(true);
  };

  return (
    <div>
      <Header />
      {!form && <button onClick={ testeClick2 }>Cadastrar nova senha</button>}
      {form && <Form onCancel={ testeClick } />}
    </div>
  );
}

export default App;
