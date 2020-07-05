import React from 'react';
import './styles.scss';

const ModalOptions = ({ modalId, onFocus }) => {



  return (
    <span onMouseLeave={onFocus} id={modalId} className="modal">
      <p onClick={() => console.log('Editar' + modalId)}>Editar</p>
      <p onClick={() => console.log('Archivar' + modalId)}>Archivar</p>
      <p onClick={() => console.log('Eliminar' + modalId)} className="delete">Eliminar</p>
    </span>
  )

}

export default ModalOptions;