import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';
import { MoreVertical } from 'react-feather';
import ModalOptions from '../utils/modalOptions/options';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productos/thunk';

const Main = () => {
  const [showModalOptions, setShowModalOptions] = useState(false);
  const dispatch = useDispatch();

  const toggleOptions = useCallback(() => {
    setShowModalOptions(!showModalOptions);
  }, [showModalOptions]);

  useEffect(() => {
    const showProducts = () => dispatch(getProducts())
    showProducts();
  }, [dispatch]);

  const state = useSelector(state => state.products);

  return (
    <main className="main">
      <div className="main__items">
        <ul className="main__items--header">
          <li>Productos</li>
          <li className="list--stock">Stock</li>
          <li className="list--price">Precio</li>
          <li className="list--options"><MoreVertical color="trasparent" /></li>
        </ul>
        {state.isLoading 
          ? <p className="main__items--loading">Cargando Productos...</p> 
          : state.products ? state.products.products.map(product => (
            <ul className="main__items--list" key={product._id}>
              <li className="list--title"><input type="checkbox" /> {product.title}</li>
              <li className="list--stock">{product.stock}</li>
              <li className="list--price">$ {product.price}</li>
              <li className="list--options" onClick={toggleOptions}><MoreVertical color="gray" /></li>
              {showModalOptions && <ModalOptions />}
            </ul>
          )) : <p className="main__items--error">No hay Productos</p>
        }
      </div>
    </main>
  );
};
export default Main;
