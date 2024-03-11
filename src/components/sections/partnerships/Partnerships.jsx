import React, { Component } from 'react';
import { products } from '../../store/base';
import Star from '../../../assets/productsImg/Star.png'
import './partnerships.css'

class Partnerships extends Component {
    render() {
        return (
            <section id='partnerships'>
                <div className="container">
                    <h2 className='ourProduction'>Почему выбирают нас</h2>

                    <div className="partnerBox">
                        {
                            products?.map((item, i)=>
                                <div key={i}>
                                    <img src={Star} alt="" />
                                    <strong>{item.title}</strong>
                                    <p>{item.desc}</p>
                                    <select name="" id="">
                                        <option value="">Читать больше</option>
                                    </select>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Partnerships;