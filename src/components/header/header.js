import React, { useState } from 'react';
import SearchInput from '../search/search';
import './styles.scss';
import FormAddProduct from './modalAddProduct/addProducts';

const Header = () => {
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);

  const toggleModalAddProduct = () => setShowModalAddProduct(!showModalAddProduct);
  
  return (
    <header className="header">
    {showModalAddProduct && <FormAddProduct toggleModalAddProduct={toggleModalAddProduct} />}
      <div className="header__top">
        <h1 className="header__title">Productos</h1>
        <button className="btn header__btn" onClick={toggleModalAddProduct}>+ Agregar Producto</button>
      </div>
      <SearchInput />
    </header>
  );
};

export default Header;
