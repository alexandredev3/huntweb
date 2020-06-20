// import React, { useEffect, useState } from 'react';
import React, { Component } from 'react'; // Maneira usando Class
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

// export default function Main() {
//     const [products, setProducts] = useState([]);
//     const [productInfo, setProductInfo] = useState({});
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         async function loadProducts(page = 1) {
//             const response = await api.get(`/products?page=${page}`);

//             const { docs, ...productInfo } = response.data;

//             // console.log(response.data.docs);
//             setProducts(docs, setPage, productInfo);

//             // console.log(productInfo.page)
//         }

//         loadProducts();

//     }, []);

//     function handlePrev() {
//     };

//     function handleNext(event) {
//         if (page === productInfo.pages) return;

//         setPage(page + 1);
//     }

//     return (
//         // <h1>{products.length}</h1>
//         <div className="product-list">
//             {products.map(product => {
//                 // product => Para cada produto...
//                 return (
//                     <article key={product._id}>
//                         <strong>{product.title}</strong>
//                         <p>{product.description}</p>

//                         <a href="/">Acessar</a>
//                     </article>
//                 );
//             })}
//             <div className="actions">
//                 <button onClick={() => handlePrev()}>Anterior</button>
//                 <button onClick={() => handleNext()}>Próximo</button>
//             </div>
//         </div>
//     );
// }


// Maneira de usando classes
export default class Main extends Component {
    state = {
        products: [],   // O vaor iniciar vai ser uma array vazia
        productInfo: {}, // E aqui que vai ser amarzenada o total de pagina o limite, pages etc...
        page: 1, // E a pagina que vai estar quando a aplicação for iniciada.
    }
    // Sempre que nos tivermos um state, o render sempre vai ficar ouvindo esse state, e quando ele ve que foi alterado ele vai rendelizar com as novas alterações.

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        // console.log(response);
        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const {page, productInfo} = this.state;

        if (page === 1) return;
        // Se ele estiver na pagina um, e porque ele não precisa volta a pagina.

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;
        // Aqui estou fazendo um verificação se ele ja esta na ultima pagina, se ele estiver ele vai parar a aplicação aqui.

        const pageNumber = page + 1;
        // Se não ele vai ir pra proxima pagina.

        this.loadProducts(pageNumber);
    };

    render() {
        const { products, page, productInfo } = this.state;
        // Desestruturação.

        // return <h1>Contagem de produtos: {this.state.products.length}</h1>
        return (
            <div className="product-list">
                {products.map(product => {
                    return (
                        <article key={product._id}>
                            <strong>{product.title}</strong>
                            <p>{product.description}</p>

                            <Link to={`/products/${product._id}`}>
                                Acessar
                                        {/* Estamos recebendo o id do produto */}
                            </Link>
                        </article>
                    );
                    // Vc pode colocar () por volta, que ele vai dar o retorno automaticamente.
                })}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>  
        );
    }
}