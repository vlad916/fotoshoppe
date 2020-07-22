import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getProduct, saveProduct } from '../services/productsService';
import { getGenres } from '../services/categoryService';

class MovieForm extends Form {
    state = { 
        data: {
            title: '',  
            genreId: '',
            price: '',
            numberInStock: '',
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    };
    
    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label('Product'),
        genreId: Joi.string()
            .required()
            .label("Category"),
        price: Joi.string()
            .required()
            .label("Price"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Stocks"),
        dailyRentalRate: Joi.number()
            .required()
            .min(0)
            .max(10)
            .label('Rate')
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const productId = this.props.match.params.id;
        if (productId === 'new') return;

        const product = getProduct(productId);
        if (!product) return this.props.history.replace('/not-found');
    }

    mapToViewModel(product) {
        return {
            _id: product._id,
            title: product.product,
            genreId: product.genre._id,
            numberInStock: product.Stocks,
            dailyRentalRate: product.Rate
        };
    }

    doSubmit = () => {
        saveProduct(this.state.data);

        this.props.history.push('/products');
    };

    render() { 
        return ( 
            <div className='container text-center'>
                <h1>Product Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Product')}
                    {this.renderSelect('genreId', "Category", this.state.genres)}
                    {this.renderInput('price', 'Price')}
                    {this.renderInput('numberInStock', 'Stocks')}
                    {this.renderInput('dailyRentalRate', 'Rate')}
                    {this.renderButton('Save')}
                </form>
            </div>
         );
    }
}
 
    data: {
        title: '',  
    }
;export default MForm