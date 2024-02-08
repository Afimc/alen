import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import './Header.css'

const Header=() =>{
    return(
      <div className='Header'>
        <h1 className='logo '> Лого на сайта</h1>
        <SearchBox className='SearchBar' />
      </div>
    )
}

export default Header;