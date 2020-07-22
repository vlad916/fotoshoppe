import React, { Component } from "react";
import { getProducts } from "../services/productsService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from '../utils/paginate';
import "./products.css";

class Products extends Component {
  state = {
    products: getProducts(),
    currentPage: 1,
    pageSize: 4,
  };

  handleDelete = (product) => {
    const products = this.state.products.filter((p) => p._id !== product._id);
    this.setState({ products });
  };

  handleLike = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, products: allProducts } = this.state;

      if (count === 0) return <p>There are no products in the database.</p>;
      
      const products = paginate(allProducts, currentPage, pageSize)
    return (
      <React.Fragment>
        <p>Showing {count} products...</p>
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
                  <img src={product.picture} alt='product photo' />
                </td>
                <td>{product.product}</td>
                <td>{product.price}</td>
                <td>{product.numberInStock}</td>
                <td>{product.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={product.liked}
                    onLikeToggle={() => this.handleLike(product)}
                  />
                    </td>
                    <td>
                        <button className='btn btn-success btn-sm'>Add to Cart</button>
                    </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(product)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Products;
