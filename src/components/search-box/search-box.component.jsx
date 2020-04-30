import React from 'react';

import './search-box.styles.css'

export const SearchBox =({placeholder, onSearch})=> (
    <input className='search' type='search' placeholder={placeholder} onChange={onSearch} />
)