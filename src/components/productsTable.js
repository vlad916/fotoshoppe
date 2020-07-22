import React, { Component } from "react";
import TableHeader from './common/tableHeader';
import Like from "./common/like";

class ProductsTable extends Component {
    columns = [
        { path: 'image', label: 'Image' },
        { path: 'product', label: 'Product' },
        { path: 'price', label: 'Price' },
        { path: 'numberInStocks', label: 'Stocks' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {},
        {},
        {}
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
