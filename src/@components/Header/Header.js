import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import './Header.css'
import NavBar from "./NavBar/NavBar";


const Header=({searchChange}) =>{
    return(
      <div className='Header'>
        <NavBar/>
        <SearchBox className='SearchBar' searchChangeToSearchBox={searchChange} />
        <h1 className='logo '> Лого на сайта</h1>

      </div>
    )
}

export default Header;