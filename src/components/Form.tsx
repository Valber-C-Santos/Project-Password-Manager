import React, { useState } from 'react';

interface Props {
  onCancel: () => void,
}
function Form({ onCancel }: Props) {
  const [nameServ, setNameServ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [btnDisable, setbtnDisable] = useState(true);
  const [hasEight, setHasEight] = useState(false);
  const [hasSixteen, setHasSixteen] = useState(false);
  const [hasLetter, setHasLetter] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const validClass = 'valid-password-check';
  const invalidClass = 'invalid-password-check';

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
    const hasLettersAndNumbers = /[a-zA-Z]/.test(password) && /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasAtLeastEight = password.length >= 8;
    const hasLessThanSixteen = hasAtLeastEight && password.length < 16;
    const validPassword = hasLettersAndNumbers
      && hasSpecialCharacter
      && hasAtLeastEight
      && hasLessThanSixteen;
    if (hasAtLeastEight) {
      setHasEight(true);
    } else {
      setHasEight(false);
    }
    if (hasLessThanSixteen) {
      setHasSixteen(true);
    } else {
      setHasSixteen(false);
    }
    if (hasLettersAndNumbers) {
      setHasLetter(true);
    } else {
      setHasLetter(false);
    }
    if (hasSpecialCharacter) {
      setHasSpecial(true);
    } else {
      setHasSpecial(false);
    }

    if (nameServ !== '' && email !== '' && password !== '' && validPassword) {
      setbtnDisable(false);
    } else {
      setbtnDisable(true);
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
      <p className={ hasEight ? validClass : invalidClass }>
        Possuir 8 ou mais caracteres
      </p>
      <p className={ hasSixteen ? validClass : invalidClass }>
        Possuir até 16 caracteres
      </p>
      <p className={ hasLetter ? validClass : invalidClass }>
        Possuir letras e números
      </p>
      <p className={ hasSpecial ? validClass : invalidClass }>
        Possuir algum caractere especial
      </p>
    </form>
  );
}

export default Form;
