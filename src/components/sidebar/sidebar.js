import React from 'react';
import './styles.scss';

const Sidebar = () => {
  return <aside className="sidebar">
    <div className="sidebar__wrapper">
      <h1 className="sidebar__title">Todos los Productos</h1>
      <h3>{'->'} Gorras</h3>
    </div>
  </aside>;
};

export default Sidebar;
