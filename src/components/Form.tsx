function Form() {
  return (
    <form>
      <label>
        Nome do serviço
        <input type="text" name="Nome do serviço" />
      </label>
      <label>
        Login
        <input type="text" name="Login" />
      </label>
      <label>
        Senha
        <input type="password" name="Senha" />
      </label>
      <label>
        URL
        <input type="text" name="URL" />
      </label>

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
