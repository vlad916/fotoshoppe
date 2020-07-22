import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

class ProductsTable extends Component {
  columns = [
    { path: "image", label: "Image" },
    { path: "product", label: "Product" },
    { path: "price", label: "Price" },
    { path: "numberInStock", label: "Stocks" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: product => <Like liked={product.liked} onClick={() => this.props.onLike(product)} />,
      label: "Add to Wishlist",
    },
    // {
    //   content: <button className="btn btn-success btn-sm">Add to Cart</button>,
    // },
    {
      key: "delete",
      content: product => (
        <button
          onClick={() => this.props.onDelete(product)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { products, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table className="table table-striped">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={this.columns} data={products} />
      </table>
    );
  }
}

export default ProductsTable;
