import React, { Component } from 'react';
import BG from '../../../assets/BG.png'
import { createRef } from 'react';

import c from './Bestseller.module.css'
                    
const carouselBox = createRef() // useRef()

const images = [
    BG,
    "https://www.rehome.co.uk/media/catalog/product/k/i/kie23120032_1_.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=",
]

class Bestseller extends Component {
    state = {
        currentImage: 0
    }

    swipeLeft = () => {
        let {currentImage} = this.state
        if(currentImage > 0){
            this.setState({
                currentImage: currentImage - 1 
            })
        }
        else{
            this.setState({
                currentImage: images.length - 1
            })
        }
        
    }

    swipeRight = () => {
        let {currentImage} = this.state
        if(currentImage < images.length - 1)
        this.setState({
            currentImage: currentImage + 1
        })
        else{
            this.setState({currentImage: 0})
        }
    }

    // useEffect vazifasini bajaradi: 
    componentDidMount=()=>{
        let {currentImage} = this.state
        carouselBox.current.scrollLeft = currentImage * carouselBox.current.offsetWidth;
        console.log(carouselBox.current.offsetWidth);
    }

    // useEffect-ning dependency vazifasini bajaradi: 
    componentDidUpdate(prevProps,prevState) {
        if (this.state.currentImage !== prevState.currentImage) {
          this.componentDidMount()
        }
      }

    render() {
        
        console.log(carouselBox)
        console.log(this.state.currentImage, images.length)
        return (
            <section>
                <div className={c.carouselWrapper} >
                    <button className={`${c.carousel__btn} swiper-button-prev`} data-btn-type='left' onClick={this.swipeLeft}></button>
                    <div className={c.carouselBox} ref={carouselBox}>
                        {
                            images.map((carouselItem, i) =>
                                <div key={i}>
                                    <img className={c.carouselItem} src={carouselItem} alt="" />    
                                </div>
                            )
                        }
                    </div>
                    <button className={`${c.carousel__btn} swiper-button-next`} data-btn-type='right' onClick={this.swipeRight}></button>

                    <div className={c.dots}>
                        {
                            images?.map((dot, index)=>
                                <button onClick={() => 
                                    this.setState({currentImage: index})}
                                    style={this.state.currentImage === index ? 
                                        {background:'linear-gradient(66deg, #5E3928 -24.09%, #E4A16F 104.02%)'} : null}
                                    className={c.dot}>
                                </button>
                            )
                        }
                    </div>

                </div>

                <div className={c.bestsellerTitleBox}>
                    <h2>Хит продаж</h2>
                    <h3>Дистиллятор для эфирных масел </h3>
                    <div>
                        <span>Цена</span>
                        <b>4 906 грн</b>
                        <button className="goToCatalogBtn">Купить</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Bestseller;