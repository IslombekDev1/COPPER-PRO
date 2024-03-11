import React, { Component } from "react";
import logo from '../../../assets/logoHeader.png'
import { FcLikePlaceholder } from "react-icons/fc";
import { RiUser3Line } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";

import './header.css'

class Header extends Component {
  render() {
    return (
     <header>
      <div className="container-fluid">
        <nav>
          <ul className="hd-firsTitle-ul">
            <li>
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </li>
            <li>
              <a href="#">Каталог</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>

          <ul className="hd-secondTitle-ul">
            <li>
              <a href="#"><FcLikePlaceholder /></a>
            </li>
            <li>
              <a href="#"><RiUser3Line /></a>
            </li>
            <li>
              <a href="#"><SlBasket  /></a>
            </li>
          </ul>
        </nav>
      </div>
     </header>
    );
  }
}

export default Header;
