import React, { Component } from "react";
import { Link } from 'react-router-dom';
import TableHeader from './common/tableHeader';
import Like from "./common/like";


class ProductsTable extends Component {
  columns = [
    { path: "picture", label: "Image" },
    {
      path: "title", label: "Product",
      content: product => <Link to={`/products/${product._id}`}>{product.title}</Link>
    },
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
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img src={product.picture} alt="product photo" />
              </td>
              <td>{product.title}</td>
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
