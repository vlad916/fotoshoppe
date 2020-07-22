import React, { Component } from "react";
import Like from "./common/like";

class ProductsTable extends Component {
  render() {
    const { products, onDelete, onLike } = this.props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stocks</th>
            <th>Rate</th>
            <th>Add to Wishlist</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img src={product.picture} alt="product photo" />
              </td>
              <td>{product.product}</td>
              <td>{product.price}</td>
              <td>{product.numberInStock}</td>
              <td>{product.dailyRentalRate}</td>
              <td>
                <Like
                  liked={product.liked}
                  onLikeToggle={() => onLike(product)}
                />
              </td>
              <td>
                <button className="btn btn-success btn-sm">Add to Cart</button>
              </td>
              <td>
                <button
                  onClick={() => onDelete(product)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductsTable;