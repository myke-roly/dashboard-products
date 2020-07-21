import { useState, useCallback } from 'react';

export const useProduct = (product, setProduct) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModalColors = useCallback((e) => {
    if(e.target.nodeName === 'svg' || e.target.nodeName === 'line') {
      setShowModal(false);
    } else setShowModal(!showModal);
  }, [showModal]);

  const selectColor = (e) => {
    const colorsFilter = product.colors.filter(item => e.target.id !== item);
    setProduct({...product, colors: [...colorsFilter, e.target.id+'' ]} );
  }

  const deleteColor = e => {
    const colorsFilter = product.colors.filter(item => e.target.parentNode.id !== item);
    setProduct({...product, colors: [...colorsFilter]} );
  }
  const deleteImage = img => {
    const imageFilter = product.images.filter(image => img !== image);
    setProduct({...product, images: [...imageFilter]} );
  }

  return {
    showModal,
    setShowModal,
    toggleModalColors,
    selectColor,
    deleteColor,
    deleteImage
  }
} 