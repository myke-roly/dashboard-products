import React from 'react';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../../redux/productos/thunk';

const ModalOptions = ({ modalId, onFocus }) => {
  
  const dispatch = useDispatch();

  const deleteItemProduct = () => {
    dispatch(deleteProduct(modalId));
  }

  return (
    <span onMouseLeave={onFocus} id={modalId} className="modal">
      <p onClick={() => console.log('Editar' + modalId)}>Editar</p>
      <p onClick={() => console.log('archivar' + modalId)}>Archivar</p>
      <p onClick={deleteItemProduct} className="delete">Eliminar</p>
    </span>
  )

}

export default ModalOptions;