import React, { Component } from 'react';
import { instance } from '../../../api/instance';
import Header from '../../sections/header/Header';
import Bestseller from '../../sections/bestseller/Bestseller';
import BestSelling from '../../sections/bestSelling/BestSelling';
import NewItems from '../../sections/newItems/NewItems';
import OrderGive from '../../sections/orderGive/OrderGive';
import WeRecommend from '../../sections/weRecommend/WeRecommend';
import Discount from '../../sections/discounts/Discounts';
import AboutUs from '../../sections/aboutUsPage/AboutUs';
import Partnerships from '../../sections/partnerships/Partnerships';
import Footer from '../../sections/footer/Footer';
import './index.css';



export default class index extends Component {
  state = {
    count: 6,
    btn_bool: true,
    photosAPI: []
  };
  
  moreProducts = () => {
    let count = this.state.photosAPI
    console.log(count)

    this.setState({
      ...this.state,
      count: count.length,
      btn_bool: false
    })
  }

  lessProducts = () => {
    this.setState({
      ...this.state,
      count: 6,
      btn_bool: true,
    })
  }

  componentDidMount(){
    instance.get(`/products`)
      .then(res => {
        this.setState({ 
          photosAPI: res.data 
        });
      })
  }
  
  render() {
    const {count, btn_bool, photosAPI} = this.state
    return (
      <>
        <Header />
        <main>
          <Bestseller />
          <div className="container">

            <h2 className='ourProduction'>Наша продукция</h2>

            <div className="photosAPIContainer">
                {
                  photosAPI?.slice(0, count).map((item)=>
                    <div className='position-relative photosAPI-box' style={{width:'445px', height:'491px'}} key={item.id}>
                        <img src={item.image} style={{width:'100%', height:'100%'}} alt="" />
                      <p className='position-absolute'> {item.title} </p>
                    </div>
                  )
                }
            </div>

            <div className="d-flex justify-content-center" style={{marginTop:'30px'}}>
              {
                btn_bool?
                  <button id='btn_selec' className="btn btn-outline-success" onClick={this.moreProducts}>Ko'proq</button>
                  :
                  <button className="btn btn-outline-success" onClick={this.lessProducts}>Qaytish</button>
              }
            </div>

          </div>
          <BestSelling />
          <NewItems />
          <OrderGive />
          <WeRecommend />
          <Discount />
          <AboutUs />
          <Partnerships/>
          <Footer />
        </main>
      </>
    )
  }
}