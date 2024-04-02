import { useSelector,useDispatch } from 'react-redux';
import './_side-nav.scss';
import accordianSlice from '../Redux/Accordian/accordianSlice';
import { useEffect } from 'react';
import { getCategories } from '../Redux/Category/categorySlice/action';
import { filterByPrice, filterProducts } from '../Redux/Products/productSlice';
import { useState } from 'react';

const SideNav =()=>{

    const accordian_data = useSelector(state=>state.categoryReducer.categories);
    const dispatch = useDispatch();
    const fetchedProductData = useSelector(state=>state.pr);
    const [products,setProducts] = useState();
    const [minPricelimit,setMinPriceLimit] = useState(10);
    const [maxPricelimit,setMaxPriceLimit] = useState(130);
    const filterData = (selectedCategory)=>{
        const payload = {selectedCategory,products};
        dispatch(filterProducts(payload));
    }

    const setPriceLimit = (e,stateFlag)=>{
        if(stateFlag==="max"){
            setMaxPriceLimit=(e.target.value);
        }
        else if(stateFlag="min"){
            setMinPriceLimit=(e.target.value);
        }

    }
    const applyPriceFilter = () =>{
        const payload = {products,minPricelimit,maxPricelimit};
        dispatch(filterByPrice(payload));
    }

    useEffect(()=>{
        dispatch(getCategories());

    },[]);

    useEffect(()=>{

        setProducts(fetchedProductData.products);

    },[fetchedProductData.status]);

    return(
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
                <div className='accordian my-3'>
                    {
                        accordian_data.map((accordianCategory,key)=>{

                            if (accordianCategory.parent_category_id===null){

                                return(

                                    <div className='accordian-item individual-category'>
                                    <div className='accordian-header'>
                                            <button className='accordian-button' data-bs-target={`#collapse${key}`} data-bs-toggle="collapse">
                                                <div className='category-title'>
                                                        <a href='#'>{accordianCategory.category}</a>
                                                </div>
                                            </button>
                                    </div>
                                    <div className='accordian-collapse collapse show' id={"collapse"+key}>
                                        <div className='accordian-body'>
                                        <ul>
                                        {
                                        accordian_data.map((subCategory)=>{
                                            if (accordianCategory.id===subCategory.parent_category_id){
                                                return <li className='sub-item'><a href='#'onClick={()=>filterData(subCategory)}>{subCategory.category}</a></li>
                                            }
                                      
                                        })
                                        }
                                       
                                        
                                        
                                        </ul>
                                    </div>
    
                                </div>
                            </div>
                                
                            )
                                
                            }
                           })
                    }
                    
        </div>
        <div className='price-filter-container'>
            <div className='section-title'>
                <h3>Filter Price</h3>
            </div>
            <div>
                <label>Min: {minPricelimit}</label>
                <input className='form-range' type="range" min={10} max={130} step={10} onChange={(e)=>setPriceLimit(e,"min")}></input>
            </div>
            <div>
                <label>Max: {maxPricelimit}</label>
                <input className='form-range' type="range" min={10} max={130} step={10} onChange={(e)=>setPriceLimit(e,"max")}></input>
            </div>
            <button className='btn btn-outline-dark my-3' onClick={applyPriceFilter}>Apply Filter</button>
        </div>

        </div>
    )

}

export default SideNav;