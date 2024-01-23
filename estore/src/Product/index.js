import './_products.scss';

const Product = () => {

    const product_data = [

       {pname:"jacket",
        price:45,
        img:"images.jpeg"},
        {pname:"shoes",
        price:45,
        img:"images (1).jpeg"},
        {pname:"shirt",
        price:45,
        img:"images (2).jpeg"},
        {pname:"socks",
        price:45,
        img:"images (3).jpeg"},
        {pname:"shorts",
        price:45,
        img:"images (1).jpeg"},
    ]

    return (
        <div className='products-container'>

            {
                product_data.map((product,key)=>{

                    return(

                        <div className='mx-5 p-3 product-card'>
                            <div className='product-image-container'>
                                <img src={require('../assets/'+product.img)}/>
                        </div>

                        <div className='product-info'>
                                <h5><a href='#'>{product.pname}</a></h5>
                                    <p className='product-price'>{product.price}</p>
                                <div className='product-rating'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </div>
                        </div>

                        </div>

                        
                    )

                })
            }
                
        </div>
    )

}

export default Product;