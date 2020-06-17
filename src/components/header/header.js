import React from 'react';
import './styles.scss';
import MenuBurguer from '../menuBurguer/MenuBurguer';

const Header = ({logOut, user}) => {
  console.log(user);
  return (
    <header className="header">
      <MenuBurguer />
      <nav className="navbar">
        <p>User</p>
        <button onClick={logOut}>Cerrar Sesion</button>
      </nav>
    </header>
  );
};

export default Header;
