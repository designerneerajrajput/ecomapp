import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Wishlist() {

    //const wishlist = useSelector((state) => state.wishlist.filter(item => item.checked)); // Filter items marked as "checked"
    const temwhislist = useSelector(state => state.wishlist);
    console.log(temwhislist, 'wishlist0')


    if (temwhislist.length === 0) {
        return <p>Your wishlist is empty.</p>;
    }

    return (


        <>
            <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
                <div class="container">
                    <div class="breadcrumb-content text-center">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li class="active">Wishlist</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="wishlist">
                <div className="container">
                    <h2>My Wishlist</h2>
                    <div className="wishlist-products">
                        {temwhislist.map((product) => (
                            <div key={product.id} className="wishlist-item">
                                <img src={product.image} alt={product.title} style={{ width: '150px', height: '150px' }} />
                                <h3>{product.title}</h3>
                                <p>${product.price.toFixed(2)}</p>
                                <p>{product.quantity}</p>
                                <div className="wishlist-actions">
                                    <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>
                                        Remove
                                    </button>

                                    <button className="btn btn-primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section></>
    );
}

export default Wishlist;
