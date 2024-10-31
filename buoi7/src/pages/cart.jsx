import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import './cart.css';

const productsInit = [
    {
        id: 1,
        brand: 'POKETO',
        name: 'Lucite Incense Holder Set',
        description: 'Set of 2',
        price: 14.00,
        quantity: 0,
    },
    {
        id: 2,
        brand: 'POKETO',
        name: 'Arc Dusen Dusen Puzzle',
        price: 28.00,
        quantity: 0,
    },
    {
        id: 3,
        brand: 'POKETO',
        name: 'Lucite Stapler',
        description: 'Iridescent',
        price: 26.00,
        quantity: 0,
    }
];

export default function Cart() {
    const [products, setProducts] = useState(productsInit);
    const [specialInstructions, setSpecialInstructions] = useState(
        "We got the puzzle for a friend, but now we want our own! Great product!"
    );
    
    const breadcrumb = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Cart'
        }
    ];

    const totalCart = useMemo(() => {
        return products.reduce((sum, product) => 
            sum + (product.price * product.quantity)
        , 0).toFixed(2);
    }, [products]);

    const handleChangeQuantity = (id, newQuantity) => {
        setProducts(products.map(product => 
            product.id === id 
                ? {...product, quantity: Math.max(0, parseInt(newQuantity) || 0)}
                : product
        ));
    };

    const handleRemoveItem = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <Breadcrumb list={breadcrumb} />
                <h1>Cart</h1>
            </div>

            <div className="cart-content">
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className="product-info">
                                        <button 
                                            onClick={() => handleRemoveItem(product.id)}
                                            className="remove-button"
                                        >
                                            ×
                                        </button>
                                        <img src="https://via.placeholder.com/150" alt={product.name} width="80" height="80" />
                                        <div className="product-details">
                                            <div className="product-brand">{product.brand}</div>
                                            <div className="product-name">{product.name}</div>
                                            {product.description && (
                                                <div className="product-description">{product.description}</div>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="price-column">${product.price.toFixed(2)} USD</td>
                                <td>
                                    <div className="quantity-control">
                                        <button 
                                            onClick={() => handleChangeQuantity(product.id, product.quantity - 1)}
                                            className="quantity-button"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="text"
                                            value={product.quantity}
                                            onChange={(e) => handleChangeQuantity(product.id, e.target.value)}
                                            className="quantity-input"
                                        />
                                        <button 
                                            onClick={() => handleChangeQuantity(product.id, product.quantity + 1)}
                                            className="quantity-button"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="total-column">
                                    ${(product.price * product.quantity).toFixed(2)} USD
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="cart-footer-wrapper">
            <div className="special-instructions">
                <h3>Special instructions</h3>
                <textarea
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                />
            </div>

            <div className="cart-footer">
                <p>Taxes and shipping not included</p>
                <div className="cart-total">
                    ${totalCart} USD
                </div>
                <button className="checkout-button">
                    CHECKOUT
                </button>
            </div>
        </div>
    </div>
    );
}