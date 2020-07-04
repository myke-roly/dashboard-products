import React from 'react';
import './styles.scss';
import { User, Archive, List, Bell, Image, LogOut } from 'react-feather';
import { firebase } from '../../firebase';

const Sidebar = () => {
  function logOutSession() {
    firebase.logOut();
  }

  return (
    <div className="sidebar">
      <div className="sidebar__top sidebar__icons">
        <a href="#!">
          <Image size="18" color="green" />
        </a>
        <a href="#!">
          <Archive size={18} />
        </a>
        <a href="#!">
          <List size={18} />
        </a>
      </div>
      <div className="sidebar__center sidebar__icons">
        <a href="#!">
          <Bell size={18} /> <span className="push"></span>
        </a>
        <a href="#!">
          <User size={18} />
        </a>
        <p onClick={logOutSession}>
          <LogOut size={18} />
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
