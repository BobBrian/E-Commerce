import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const[{basket}, disaptch] = useStateValue();
    return (
        <div className='header'>
            <Link to = "/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            </Link>
            

            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
             
            <div className="header_nav">
                <Link>
                <div className="header_option">
                    <span className='header__optionLineOne'> Hello Guest</span>
                    <span className='header__optionLineTwo'> Sign-In</span>
                </div>
                </Link>
                <div className="header_option">
                    <span className='header__optionLineOne'> Returns</span>
                    <span className='header__optionLineTwo'> &Orders</span>
                </div>

                <div className="header_option">
                    <span className='header__optionLineOne'> Your</span>
                    <span className='header__optionLineTwo'> Prime</span>
                </div>

            </div>



            <Link to="/checkout">

            <div className="header_optionBasket">
                <ShoppingBasketIcon/>
    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>

            </div>

            </Link>
            
            
            
        </div>
    )
}

export default Header
