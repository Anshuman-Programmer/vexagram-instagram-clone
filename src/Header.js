import React from 'react';
import './Header.css';
import logo from './image/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
    return (
        <div className="header">
            <div className="container">

                <div className="logo">
                    <img src={logo} alt="hi there"></img>
                </div>

                <div className="input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"></input>
                </div>

                <div className="icons">
                    <div className="header_option">
                        <HomeIcon/>
                    </div>
                    <div className="header_option">
                        <SendIcon/>
                    </div>
                    <div className="header_option">
                        <ExploreIcon/>
                    </div>
                    <div className="header_option">
                        <FavoriteBorderIcon/>
                    </div>
                    <div className="header_option">

                        <Avatar className="avatar" src="https://cdn.dribbble.com/users/1736305/screenshots/13938031/media/00757ecbfc0df36d4124cdc994706a3d.jpg?compress=1&resize=400x300"/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
