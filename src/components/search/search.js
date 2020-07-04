import React, { useState } from 'react';
import './styles.scss';
import { X, Search } from 'react-feather';

const SearchInput = () => {
  const [queryInput, setQueryInput] = useState('');

  return (
    <div className="search">
      <span><Search size="17" /></span>
      <input
        type="text"
        value={queryInput}
        placeholder="Buscar...."
        onChange={e => setQueryInput(e.target.value)}
      />
      {queryInput.length > 0 && <span onClick={() => setQueryInput('')}><X size="17" /></span>}
    </div>
  );
};

export default SearchInput;
