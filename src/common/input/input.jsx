import React from 'react';

export const Input = ({ type, placeholder, title, value, handleChange }) => {
  return (
    <div>
      <input
          type={type}
          placeholder={placeholder}
          name={title}
          value={value}
          onChange={handleChange}
        />
    </div>
  )
}