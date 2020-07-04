import React from 'react';

const Color = ({ color, selectColor }) => (
  <label
    id={color}
    className="color"
    style={{ background: color }}
    onClick={selectColor}
  ></label>
);

export default Color;
