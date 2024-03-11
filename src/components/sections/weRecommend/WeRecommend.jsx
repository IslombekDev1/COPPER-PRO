import React, { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../bestSelling/styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { instance } from "../../../api/instance";
import './WeRecommend.css'

class WeRecommend extends Component {
  state = {
    count: 3,
    photosAPI: [],
  };

  componentDidMount() {
    instance.get(`/products`).then((res) => {
      this.setState({
        photosAPI: res.data,
      });
    });
  }

  trimDescription(str) {
    return str.split(" ").slice(0, 10).join(" ") + "...";
  }

  render() {
    let { count, photosAPI } = this.state;
    // console.log(photosAPI)
    return (
      <section id="weRecommend">
        <div className="container-fluid">
          <h2 className="ourProduction">мы рекомендуем</h2>

          <>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                {photosAPI?.slice(0, count).map((item) => (
                  <div key={item.id} className="">
                    <img
                      className="photosAPI-images"
                      src={item.image}
                      alt=""
                    />
                    <div className="d-flex photosAPI-descBox">
                      <p className="">
                        {this.trimDescription(item.description)}
                      </p>
                      <span>${item.price + 2}</span>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {photosAPI?.slice(8, 11).map((item) => (
                  <div key={item.id} className="">
                    <img
                      className="photosAPI-images"
                      src={item.image}
                      alt=""
                    />
                    <div className="d-flex photosAPI-descBox">
                      <p className="">
                        {this.trimDescription(item.description)}
                      </p>
                      <span>${item.price + 2}</span>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {photosAPI?.slice(11, 14).map((item) => (
                  <div key={item.id} className="">
                    <img
                      className="photosAPI-images"
                      src={item.image}
                      alt=""
                    />
                    <div className="d-flex photosAPI-descBox">
                      <p>{this.trimDescription(item.description)}</p>
                      <span>${item.price + 2}</span>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
              <button className="btn goToCatalogBtn">Перейти в каталог</button>
            </Swiper>
          </>
        </div>
      </section>
    );
  }
}

export default WeRecommend;