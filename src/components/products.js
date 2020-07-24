import React, { Component } from "react";
import { getProducts } from "../services/productsService";
import { getGenres } from "../services/categoryService";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import ProductsTable from "./productsTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import SearchProduct from "./searchProduct";
import _ from "lodash";
import "./css/products.css";

class Products extends Component {
  state = {
    products: [],
    genres: [],
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      searchQuery,
      sortColumn,
      products: allProducts,
    } = this.state;

    let filtered = allProducts;
    if (searchQuery)
      filtered = allProducts.filter((p) =>
        p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allProducts.filter((p) => p.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const products = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: products };
  };

  render() {
    const { length: count } = this.state.products;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0)
      return (
        <p style={{ textAlign: "center" }}>
          There are no products in the database...
        </p>
      );

    const { totalCount, data: products } = this.getPagedData();
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-3">
            <SearchProduct value={searchQuery} onChange={this.handleSearch} />
            <Link
              to="/products/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              Suggest a product
            </Link>
          </div>
          <div className="col">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
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
