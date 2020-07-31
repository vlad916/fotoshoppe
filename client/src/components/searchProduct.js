import React from "react";

const SearchProduct = ({ value, onChange }) => {
  return (
    <input
      style={{ marginLeft: '11px'}}
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search for a product..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchProduct;

// style = {{ width: '250px' }}
