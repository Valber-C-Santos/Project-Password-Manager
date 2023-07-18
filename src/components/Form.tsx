import { useState } from 'react';

type ProphandleState = {
  handleState: () => void;
};

const inital = {
  name: '',
  login: '',
  password: '',
  url: '',
};

type InputProps = {
  name: string,
  login: string,
  password: string,
  url: string
};

function Form({ handleState }: ProphandleState) {
  const [cadastro, setCadastro] = useState(false);
  const [objList, setObjList] = useState<InputProps[]>([]);
  const [regist, setRegist] = useState(true);
  const [genericState, setGenericState] = useState<InputProps>(inital);

  const handleInput = ({ target: { name, value } }: any) => {
    const SaveData = {
      ...genericState,
      [name]: value,
    };
    setGenericState(SaveData);
    verifyData(genericState);
  };

  const verifyData = (data: any) => {
    const { name, login, password } = data;
    if (name.length && login.length && verifypassword(password)) {
      setRegist(false);
    } else {
      setRegist(true);
    }
  };

  const regexLN = /(?=.*[0-9])(?=.*[a-zA-Z])/;
  const characterSpecial = /(?=.*[!#@$%&])/;

  const verifypassword = (senha: any) => {
    const regex = /(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-zA-Z])/;
    const passLength = (senha.length >= 8 && senha.length <= 16);
    return regex.test(senha) && passLength;
  };

  const handleApaga = (indice: any) => {
    const attSenha = [...objList];
    attSenha.splice(indice, 1);
    setObjList(attSenha);
    if (attSenha.length === 0) {
      setCadastro(false);
    }
  };

  const handleCadastro = () => {
    const addCadastro = { ...genericState };
    setObjList([...objList, addCadastro]);
    setCadastro(true);
    setGenericState(inital);
  };

  return (
    <>
      <label htmlFor="name">
        Nome do serviço
        <input
          id="name"
          type="text"
          name="name"
          onChange={ handleInput }
          value={ genericState.name }
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          id="login"
          type="text"
          name="login"
          onChange={ handleInput }
          value={ genericState.login }
        />
      </label>
      <label htmlFor="senha">
        Senha
        <input
          id="senha"
          type="password"
          name="password"
          onChange={ handleInput }
          value={ genericState.password }
        />
      </label>
      <label htmlFor="url">
        URL
        <input
          id="url"
          type="text"
          name="url"
          onChange={ handleInput }
          value={ genericState.url }
        />
      </label>
      <button disabled={ regist } onClick={ handleCadastro }>Cadastrar</button>
      <button onClick={ handleState }>Cancelar</button>
      <article>
        {characterSpecial.test(genericState.password)
          && <h5 className="valid-password-check">Possuir algum caractere especial</h5>}
        {characterSpecial.test(genericState.password) === false
          && <h5 className="invalid-password-check">Possuir algum caractere especial</h5>}
        {regexLN.test(genericState.password)
          && <h5 className="valid-password-check">Possuir letras e números</h5>}
        {regexLN.test(genericState.password) === false
          && <h5 className="invalid-password-check">Possuir letras e números</h5>}
        {genericState.password.length >= 8
          && <h5 className="valid-password-check">Possuir 8 ou mais caracteres</h5>}
        {genericState.password.length < 8
          && <h5 className="invalid-password-check">Possuir 8 ou mais caracteres</h5>}
        {genericState.password.length <= 16
          && <h5 className="valid-password-check">Possuir até 16 caracteres</h5>}
        {genericState.password.length > 16
          && <h5 className="invalid-password-check">Possuir até 16 caracteres</h5>}
      </article>
      {objList.length === 0
        && <h5>nenhuma senha cadastrada</h5>}
      {cadastro === true && (
        <>
          <ol>
            {objList.map((data, indice) => (
              <li key={ indice }>
                <a target="_blank" href={ data.url } rel="noreferrer">{ data.name }</a>
                <h5>{data.password}</h5>
                <h5>{data.login}</h5>
                <button
                  data-testid="remove-btn"
                  onClick={ () => handleApaga(indice) }
                >
                  X

                </button>
              </li>
            ))}
          </ol>
          <button onClick={ () => setCadastro(false) }>Cadastrar nova senha</button>
        </>
      )}
    </>
  );
}

export default Form;
