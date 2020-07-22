import React, { Component } from "react";
import { getProducts } from "../services/productsService";
import { getGenres } from "../services/categoryService";
import { paginate } from "../utils/paginate";
import ProductsTable from "./productsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { Link } from 'react-router-dom';
import _ from "lodash";
import "./products.css";

class Products extends Component {
  state = {
    products: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Products" }, ...getGenres()];
    this.setState({ products: getProducts(), genres: genres });
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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      products: allProducts,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allProducts.filter((p) => p.genre._id === selectedGenre._id)
        : allProducts;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn, genres } = this.state;

    if (count === 0) return <p>There are no products in the database.</p>;

    const { totalCount, data: products } = this.getPagedData();
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <Link
              to="/products/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              Suggest a product
            </Link>
            <p>Showing {totalCount} products...</p>
            <ProductsTable
              products={products}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
