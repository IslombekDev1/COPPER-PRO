import React, { Component } from 'react';
import CopperPro from '../../../assets/CopperPro.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className='footer__Container'>
                        <div className='copperProBox'>
                            <a href="#">
                                <img src={CopperPro} alt="" />
                            </a>
                                <span>
                                    © 2021 “Copper Pro” 
                                    Все права защищенны
                                </span>
                                <a href="#">Политика конфиденциальности</a>
                        </div>

                        <div className='ft-contact-box'>
                            <ul className='ft-contact-box__first-ul'>
                                <li className='ft-ul-title'>Навигация</li>
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
                            <ul>
                                <li className='ft-ul-title'>Каталог</li>
                                <li>
                                    <a href="#">Для эфирных масел</a>
                                </li>
                                <li>
                                    <a href="#">Для гидролатов</a>
                                </li>
                                <li>
                                    <a href="#">Медная посуда</a>
                                </li>
                                <li>
                                    <a href="#">Аксессуары из меди</a>
                                </li>
                                <li>
                                    <a href="#">Индивидуальный заказ</a>
                                </li>
                                <li>
                                    <a href="#">Скидки и предложения</a>
                                </li>
                            </ul>
                            <ul>
                                <li className='ft-ul-title'>Контакты</li>
                                <li>
                                    <a href="#">Бажана 8-Б, Киев, 02132 Украина</a>
                                </li>
                                <li>
                                    <a href="#">+38 (096) 990 67 56</a>
                                </li>
                                <li>
                                    <a href="#">a.alambik@gmail.com</a>
                                </li>
                                <li className='ft-iconsBox'>
                                    <ul>
                                        <li>
                                            <a href="www.twitter.com">
                                                <FaTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.twitter.com">
                                                <FaFacebookF />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.twitter.com">
                                                <RiInstagramFill />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                        <div className='ft-up-box'>
                            <a href="#up">ВВЕРХ</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;