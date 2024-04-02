import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './_products.scss';
import { useEffect } from 'react';
import { getProducts } from '../Redux/Products/productAction';
import { addCartItem } from '../Redux/Cart/cartSlice';
import { Link } from 'react-router-dom';


const Product = () => {
    const productData = useSelector(state => state.pr.products);
    
    const dispatch = useDispatch();
    const cart_data = useSelector(state=>state.cr);
   


    useEffect(() => {
        dispatch(getProducts());
    }, []);

   const addToCart = (itemData)=>{
        const payload = {...itemData,quantity:1};
        dispatch(addCartItem(payload));
   }
 

    return (
        <div className='products-container'>
            {productData.map((product, key) => (
                <div className='mx-5 p-3 product-card'>
                    <Link to="productDetails"
                    state={product}>
                    <div className='product-image-container'>
                        <img src={require('../assets/' + product.product_img)} alt={product.product_name} />
                    </div>
                    </Link>
                    

                    <div className='product-info'>
                        <h5><Link to="/productDetails" state={product}>{product.product_name}</Link></h5>
                        <p className='product-price'>{product.price}</p>
                        <div className='product-rating'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                        </div>
                    </div>
                    <div className='my-3' onClick={()=>addToCart(product)}>
                        <div className='cart-button'>
                            <div className='cart-icon-container'>
                                <i className='fa fa-shopping-cart mx-4' />
                            </div>
                            <div className='cart-text-container mx-3'>
                                <p>Add to Cart</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Product;