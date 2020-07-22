import React, { Component } from "react";
import { getProducts } from "../services/productsService";
import { getGenres } from "../services/categoryService";
import { paginate } from "../utils/paginate";
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";

import "./products.css";

class Products extends Component {
  state = {
    products: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({ products: getProducts(), genres: getGenres() });
  }

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

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre });
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, selectedGenre, products: allProducts, genres } = this.state;

    if (count === 0) return <p>There are no products in the database.</p>;

      const filtered = selectedGenre ? allProducts.filter(p => p.genre._id === selectedGenre._id) : allProducts;
    const products = paginate(filtered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
                <ListGroup
                    items={genres}
                    selectedItem={this.state.selectedGenre}
                    onItemSelect={this.handleGenreSelect}
                  />
        </div>
        <div className="col">
          <p>Showing {filtered.length} products...</p>
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
                      onLikeToggle={() => this.handleLike(product)}
                    />
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm">
                      Add to Cart
                    </button>
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
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Products;
