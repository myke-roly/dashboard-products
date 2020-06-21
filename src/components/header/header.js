import React from 'react';
import './styles.scss';
import MenuBurguer from '../menuBurguer/MenuBurguer';

const Header = ({logOut, showSidebar,  user}) => {
  return (
    <header className="header">
      <MenuBurguer showSidebar={showSidebar} />
      <nav className="navbar">
        {user !== null && <p>{user.email}</p>}
        <button onClick={logOut}>Cerrar Sesion</button>
      </nav>
    </header>
  );
};

export default React.memo(Header);
