import React, { Component } from "react";
import { getProducts } from "../services/productsService";
import "./products.css";

class Products extends Component {
  state = {
    products: getProducts(),
  };
    
    handleDelete = (product) => {
        const products = this.state.products.filter(p => p._id !== product._id);
        this.setState({ products });
    };

  render() {
    const { products } = this.state;
    return (
      <table className="table">
        <thead>
                <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stocks</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
              <tr key={product._id}>
              <td>
                <img src={product.image} />
              </td>
              <td>{product.product}</td>
              <td>{product.price}</td>
              <td>{product.numberInStock}</td>
                  <td>{product.dailyRentalRate}</td>
                  <td>
                      <button onClick={ () => this.handleDelete (product)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Products;
