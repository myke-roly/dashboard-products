import React, { useState, useContext } from 'react';
import './styles.scss';
import { ContextFirebase } from '../../firebase';

const Login = ({ history }) => {
  const contextFirebase = useContext(ContextFirebase);
  const { user, firebase } = contextFirebase;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function logIn(e) {
    e.preventDefault();
    if(email === '') return;
    try {
      console.log(history)
      await firebase.logIn(email, password);
      setTimeout(() => history.replace('/'), 3000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(''), 5000);
    }
  }

  return (
    <div className="Login">
      <form className="Login__form" onSubmit={logIn}>
        <h1 className="form__title">Iniciar sesion</h1>
        <div className="form__input">
          <label htmlFor="email">Ingrese su email</label>
          <input
            className="form__input--email"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form__input">
          <label htmlFor="password">Ingrese su contraseña</label>
          <input
            className="form__input--password"
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="setting">
          <a href="!#">Olvidaste tu contraseña</a>
          <button type="submit" className="btn">{user ? 'Iniciando Sesion...' : 'Iniciar Sesion'}</button>
        </div>
        {error && <p className="Login__error">{error}</p>}
      </form>
    </div>
  );
};

export default React.memo(Login);
