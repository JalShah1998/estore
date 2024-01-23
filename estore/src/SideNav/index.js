import './_side-nav.scss';

const SideNav =()=>{

    return(
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
                <div className='accordian'>
                    <div className='accordian-item individual-category'>
                        <div className='accordian-header'>
                            <button className='accordian-button' data-bs-target="#accordian-heading-one" data-bs-toggle="collapse">
                                    <div className='category-title'>
                                            <a href='#'>Men</a>
                                        </div>
                                </button>
                            </div>
                            <div className='accordian-collapse collapse show' id="accordian-heading-one">
                                <div className='accordian-body'>
                                        <ul>
                                            <li className='sub-item'><a href='#'>Coats</a></li>
                                            <li className='sub-item'><a href='#'>Boots</a></li>
                                            <li className='sub-item'><a href='#'>PartyWear</a></li>
                                            <li className='sub-item'><a href='#'>Hats</a></li>
                                        </ul>
                                </div>

                            </div>
                        </div>
                    </div>
        </div>
    )

}

export default SideNav;