import React, { useState, useEffect, useCallback } from 'react';
import './styles.scss';
import { MoreVertical } from 'react-feather';
import ModalOptions from './modalOptions/options';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productos/thunk';

const Main = () => {
  const [showModalOptions, setShowModalOptions] = useState(false);
  const [itemId, setItemId] = useState('');

  const dispatch = useDispatch();

  // Show modal of product
  const toggleOptions = useCallback((e) => {
    setItemId(e.target.id);
    setShowModalOptions(!showModalOptions);
  }, [showModalOptions]);

  useEffect(() => {
    dispatch(getProducts());
  }, []); //eslint-disable-line

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
              <li className="list--title"><input type="checkbox" /> <span>{product.title}</span></li>
              <li className="list--stock">{product.stock}</li>
              <li className="list--price">$ {product.price}</li>
              <li className="list--options" id={product._id} onClick={e => toggleOptions(e)}><MoreVertical /></li>
              {showModalOptions && itemId === product._id  && <ModalOptions onFocus={() => setShowModalOptions(false)} modalId={product._id} />}
              {/* {showModalOptions && <ModalOptions modalId={product._id} productId={itemId} />} */}
            </ul>
          )) : <p className="main__items--error">No hay Productos</p>
        }
      </div>
    </main>
  );
};
export default Main;
