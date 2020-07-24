import React from 'react';

const SearchProduct = () => {
    const { value, onChange } = props;

    return (
        <input
            type='text'
            name='query'
            className='form-control my-3'
            placeholder='Search for a product...'
            value={value}
            onChange={ e => onChange(e.currentTarget.value)}
        />
     );
}
 
export default SearchProduct;