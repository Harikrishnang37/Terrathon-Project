import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import ParkIcon from '@mui/icons-material/Park';


function Header() {
    const [{basket}, dispatch] = useStateValue()
  return (
    <div className='header'>
        <Link to="/">
        <ParkIcon/><strong>Urban Farmers</strong>
        </Link>
        <div className='header__search'>
            <input className='header__searchInput' type="text"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        <Link to = "/login">
        <div className='header__nav'>
            <div className='header__option'>
            <span className='one'>Login</span>
            </div>
        </div>
        </Link>

        <Link to = "/sell">
        <div className='header__nav'>
            <div className='header__option'>
                <span className='one'>Sell</span>
            </div>
        </div>
        </Link>

        <Link to = "/howto">
        <div className='header__nav'>
            <div className='header__option'>
                <span className='one'>"How To"</span>
            </div>
        </div>
        </Link>

        <Link to="/checkout">
        <div className='header__basket'>
            <ShoppingBasketIcon/>
            <span className='two'>{basket?.length}</span>
        </div>
        </Link>
    </div>
  )
}

export default Header;