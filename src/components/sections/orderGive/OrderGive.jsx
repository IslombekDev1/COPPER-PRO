import React, { Component } from 'react';
import './OrderGive.css'

class OrderGive extends Component {
    render() {
        return (
            <section id='orderGive'>
                <div className="container">
                    <button className="btn goToCatalogBtn">Перейти в каталог</button>
                </div>
            </section>
        );
    }
}

export default OrderGive;
