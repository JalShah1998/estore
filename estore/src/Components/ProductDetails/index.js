import { useLocation } from "react-router-dom";
import './_Product-Details.scss';
import { useDispatch } from "react-redux";

const ProductDetails = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const addToCart = () =>{
        dispatch(addToCart(location.state))
    }
    return(
        <div>
        <div className="row container my-5 product-details-container">
            <div className="col-5 product-image-container">
                <img src={require('../../assets' + location.state.product_img)} alt="Product" />
            </div>
            <div className="col-7 product-info">
                <span id="product-name">{location.state.product_name}</span>
            </div>
            <div className="rating-container">
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
            </div>
            <div className="product-price">
                MRP:<span className="price">{location.state.price}</span>
                <div style={{fontSize:"0.8em"}}>Inclusive of all Taxes</div>
            </div>
            <div className="my-3 product-description">
                Some Product Descp.
            </div>
            <div className="my-5" onClick={addToCart}>
                <div className="btn btn-warning cart-button">
                    <div className="cart-icon-container">
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                </div>
                <div className="cart-text-container">
                    <p>Add to Cart</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;