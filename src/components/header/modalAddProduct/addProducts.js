import React, { useState } from 'react';
import './styles.scss';
import {
  X,
  Pocket,
  ArrowDown,
  ArrowUp,
  Loader,
  PlusSquare,
} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/productos/thunk';

import Color from './color';
import { colors } from './colors';
import { useProduct } from './hooks/useProduct';

const FormAddProduct = ({ toggleModalAddProduct }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.addProductReducer.isLoading);

  const initialState = {
    title: '',
    price: '',
    stock: '',
    talles: '',
    colors: [],
    description: '',
    images: [
      /*'https://p.armam.at/Flag-Bearer-Cap-Multicam-5.11-Tactical-am24310main1.png'*/
    ],
  };

  const [product, setProduct] = useState(initialState);

  // Hook colors actions
  const {
    showModal,
    toggleModalColors,
    selectColor,
    deleteColor,
    deleteImage,
  } = useProduct(product, setProduct);

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    let values = '';
    if (name === 'title') value = value.toUpperCase();
    if (name === 'price') value = Number(value);
    if (name === 'colors') {
      values = [...product.colors, value + ''];
    } else if (name === 'images') {
      const urlImage = URL.createObjectURL(e.target.files[0]);
      values = [...product.images, urlImage + ''];
    } else values = value;
    setProduct({ ...product, [name]: values });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    for (let item in product) {
      if (product[item].length === 0) {
        setError('Todos los campos son obligaorios!');
        setTimeout(() => setError(''), 1500);
        return;
      }
    }
    dispatch(addProduct(product));
    setTimeout(() => toggleModalAddProduct(), 1500);
  };

  const clickOutsideForm = (e) => {
    if (e.target.className === 'modal-product') {
      toggleModalAddProduct();
    }
  };

  return (
    <div className="modal-product" onClick={clickOutsideForm}>
      <form onSubmit={submitForm}>
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
          type="number"
          placeholder="Precio"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="number"
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
                <Color key={color} color={color} selectColor={selectColor} />
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
        <section className="images">
          <label htmlFor="images">
            <PlusSquare size="30" />
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleChange}
          />
          {product.images.map((image) => (
            <figure className="image" key={image} onClick={() => deleteImage(image)}>
              <img key={image} src={image} alt="imagen" />
              <X color="red" />
            </figure>
          ))}
        </section>
        {error && <p className="msg-error">{error}</p>}
        <button className="btn" type="submit">
          {loading ? (
            <span className="btn__loading">
              <small>Agregando producto</small> <Loader size="20" />
            </span>
          ) : (
            'Agregar Producto'
          )}
        </button>
      </form>
    </div>
  );
};

export default FormAddProduct;
