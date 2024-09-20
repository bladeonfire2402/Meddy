import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './index.css'

const SearchBar = () => {
    return(
        <div className="SearchBar-wrapper relative">
            <input className="px-2 py-2 border rounded text-xs" type="text" placeholder="Tìm kiếm sản phẩm tên sản phẩm"/>
            <div className="rounded absolute top-1 right-1 bg-lightblue text-allwhite">
                <SearchIcon className="size-2"/>
            </div>
        </div>
    )
}
export default SearchBar;