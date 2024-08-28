import React, { useState, useEffect } from 'react';
import productsData from './data/products.json';
import product1 from './assets/product1.png';
import product2 from './assets/product2.png';
import product3 from './assets/product3.png';
import product4 from './assets/product4.png';
import product5 from './assets/product5.png';
import product6 from './assets/product6.png';

const imageMap = {
    'product1.png': product1,
    'product2.png': product2,
    'product3.png': product3,
    'product4.png': product4,
    'product5.png': product5,
    'product6.png': product6,
};

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    const categories = [...new Set(products.map(product => product.category))];

    const renderProductsByCategory = (category) => {
        return products
            .filter(product => product.category === category)
            .map(product => (
                <div className="col-lg-4 col-md-6 col-12 mb-4" key={product.id}>
                    <div className="card">
                        <img src={imageMap[product.image]} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="price">${product.price}</h5>
                                <a href="#buy" className="btn btn-primary d-flex align-items-center">
                                    <i className="fas fa-cart-plus me-2"></i> {/* Cart icon */}
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ));
    };

    return (
        <section id="products" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Products</h2>
                {categories.map(category => (
                    <div key={category}>
                        <h3>{category}</h3>
                        <div className="row">
                            {renderProductsByCategory(category)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
