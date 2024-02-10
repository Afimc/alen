import React from "react";
import './NavBar.css';

const NavBar=() => {
    return(
        <div className="topnav">
          <a class="active" href="#home">Начало</a>
          <a href="#news">Промоции</a>
          <a href="#contact">Контакти</a>
          <a href="#about">За нас</a>
        </div>

    );
};




export default NavBar;