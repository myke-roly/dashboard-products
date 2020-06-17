import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const NotFound = () => {
  return (
    <>
      <Link to="/" className="btn btn__404">
        {'<<'} VOLVER AL INICIO
      </Link>
      <img src="./404.svg" alt="page not found" />
    </>
  );
};

export default NotFound;
