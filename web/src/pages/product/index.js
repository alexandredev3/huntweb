import React, { Component } from 'react';
// import React from 'react';
import api from '../../services/api';

import './styles.css';

// export default function Product() {
//     return (
//         <h1>Product</h1>
//     );
// };

export default class Product extends Component {
    state = {
        product: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        // Estou acessando as props, e pegando o id que esta na url do browser.

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }
};