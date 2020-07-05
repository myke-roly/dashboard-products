import React, { useState } from 'react';
import './styles.scss';
import { X, Pocket, ArrowDown, ArrowUp, Loader } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/productos/thunk';

import Color from './color';
import { colors } from './colors';
import { useColor } from './hook';

const FormAddProduct = ({ toggleModalAddProduct }) => {
  
  const dispatch = useDispatch();
  const loading = useSelector(state => state.addProductReducer.isLoading);
  
  const initialState = {
    title: '',
    price: '',
    stock: '',
    talles: [],
    colors: [],
    description: '',
    images: ['https://p.armam.at/Flag-Bearer-Cap-Multicam-5.11-Tactical-am24310main1.png'],
  };

  const [product, setProduct] = useState(initialState);

  // Hook colors actions
  const { showModal, toggleModalColors, selectColor, deleteColor } = useColor(product, setProduct);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = ''
    if(name === 'colors') {
      value = [...product.colors, e.target.value+'']
    } else if(name === 'images') {
      value = [...product.images, e.target.value+'']
    } else value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const submitForm = async e => {
    e.preventDefault();
    dispatch(addProduct(product))
    setTimeout(() => toggleModalAddProduct(), 1500);
  }

  const clickOutsideForm = e => {
    if(e.target.className === 'modal-product') {
      toggleModalAddProduct();
    }
  }

  return (
    <div className="modal-product" onClick={clickOutsideForm}>
      <form onSubmit={submitForm} >
        <span className="modal__product--close" onClick={toggleModalAddProduct}>
          <X />
        </span>
        <h2>
          <Pocket size="12" /> Agregar un nuevo Producto
        </h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={product.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Precio"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
        />
        <select name="talles" onChange={handleChange}>
          <option value="adult">Talle</option>
          <option value="adult">ADULTO</option>
          <option value="small">NIÑOS</option>
        </select>
        <section className="colors" onClick={toggleModalColors}>
          {product.colors.length === 0 && (
            <span placeholder="colores">Colores</span>
          )}
          <div className="colors__selected">
            {product.colors.map((color) => (
              <div key={color} id={color} className="colors__selected--item">
                <Color color={color} />
                <X size="14" onClick={deleteColor} />
              </div>
            ))}
          </div>
          {showModal ? <ArrowUp size="12" /> : <ArrowDown size="12" />}
          {showModal && (
            <div className="items-colors">
              {colors.map((color) => (
                <Color
                  key={color}
                  color={color}
                  selectColor={selectColor}
                />
              ))}
            </div>
          )}
        </section>
        <textarea
          name="description"
          placeholder="Descripcion"
          value={product.description}
          onChange={handleChange}
        ></textarea>
        <input type="file" name="images" onChange={handleChange} />
        <button className="btn" type="submit">
          {loading
          ? <span className="btn__loading"><small>Agregando producto</small> <Loader size="20" /></span>
          : 'Agregar Producto' }
        </button>
      </form>
    </div>
  );
};

export default FormAddProduct;
