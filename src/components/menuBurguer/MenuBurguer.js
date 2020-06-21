import React from 'react';
import './styles.scss';

const MenuBurguer = ({showSidebar}) => {
  return (
    <div className="menu__burguer" role="button" onClick={showSidebar}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
};

export default MenuBurguer;
