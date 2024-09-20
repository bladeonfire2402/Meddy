import React from "react";
import SearchBar from "./header-item/search-bar";
import '../header/index.css'
import './index.css';
import MenuNavigation from "./header-item/menu-navigation";
import OtherNavigation from "./header-item/other-navigation";

const Header = () => {
    return <div className="header bg-allwhite">
    <div className="header-wrapper justify-between items-center flex">
        <img src="/logoweb.png" alt="meomeo" className="logo" />
        <SearchBar/>
        <MenuNavigation/>
        <OtherNavigation/>
    </div>
    </div>
}
export default Header