import React from 'react';
import { Link } from "react-router-dom"; 
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "../StateProvider";
import { auth } from '../Firebase';

function Header() {
    const [{basket, user}] = useStateValue();

    const login = () =>{
        if (user) {
            auth.signOut();
            alert("Successfully Signed out!");
        }
    }

    return (
        <nav className="header">
            {/* logo on the left */}


            <Link to = "/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"></img>
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" class="header__searchInput"></input>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__options">
                        <span className="header__optionsLineOne">Hello {user?.email}</span>
                        <span className="header__optionsLineTwo">{user?"Sign Out": "Sign in"}</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Returns</span>
                        <span className="header__optionsLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__options">
                        <span className="header__optionsLineOne">Your</span>
                        <span className="header__optionsLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link className="header__link" to="/checkout">
                    <div className="header__optionsBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionsLineTwo header__optionsBasketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>

            {/* Basket icon */}
        </nav>
    )
}

export default Header
