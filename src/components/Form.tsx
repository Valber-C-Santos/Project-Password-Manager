import React, { useState } from 'react';

interface Props {
  onCancel: () => void,
  handleClickPassword: () => void
}
function Form({ onCancel, handleClickPassword }: Props) {
  const [nameServ, setNameServ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [btnDisable, SetbtnDisable] = useState(true);

  function resetForm() {
    setNameServ('');
    setEmail('');
    setPassword('');
    setUrl('');
  }
  function handleChangeNameServ(event: React.ChangeEvent<HTMLInputElement>) {
    setNameServ(event.target.value);
    handleInfos();
  }

  function handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    handleInfos();
  }

  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    handleInfos();
  }

  function handleChangeUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }

  function handleInfos() {
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const validPassword = regex.test(password);

    if (nameServ !== '' && email !== '' && password !== '' && validPassword) {
      SetbtnDisable(false);
    } else {
      SetbtnDisable(true);
    }
  }

  return (
    <form>
      <label>
        Nome do serviço
        <input
          type="text"
          name="Serviço"
          onChange={ handleChangeNameServ }
          value={ nameServ }
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name="Login"
          onChange={ handleChangeLogin }
          value={ email }
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="Senha"
          onChange={ handleChangePassword }
          value={ password }
        />
      </label>
      <label>
        URL
        <input
          type="text"
          name="URL"
          onChange={ handleChangeUrl }
          value={ url }
        />
      </label>
      <button disabled={ btnDisable }>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
