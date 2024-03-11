import React, { Component } from "react";
import { instance } from "../../../api/instance";
import "../../pages/home/index.css";
import "./BestSelling.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

class BestSelling extends Component {
  state = {
    count: 3,
    productsAPI: [],
    categoriesAPI: []
  };

  componentDidMount() {
    instance.get(`/products`).then((res) => {
      this.setState({
        productsAPI: res.data
      });
    });
  }

  categoriesFunc() {
    instance.get(`/users`).then((res) => {
      this.setState({
        categoriesAPI: res.data
      });
    })
    .catch((err) => console.log(err));
  }

  trimDescription(str) {
    return str.split(" ").slice(0, 5).join(' ');
  }

  render() {
    let { count, productsAPI } = this.state;
    console.log('products',productsAPI);
    return (
      <section id="bestSelling">
        <div className="container-fluid">
          <h2 className="ourProduction">Лучшие продажи</h2>

          {/* {productsAPI?.slice(0, count).map((item) => (
              <div
                className="productsAPI-box"
                style={{ width: "445px", height: "491px" }}
                key={item.id}
              >
                <img
                  src={item.images}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
                <div className="d-flex justify-content-between bestSellingDescBox">
                  <p> {this.trimDescription(item.description)} </p>
                  <span> {item.price} </span>
                </div>
              </div>
            ))}

            <button
              className="btn goToCatalogBtn"
              onClick={this.goToCatalogBtn}
            >
              Перейти в каталог
            </button> */}

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
                {productsAPI?.slice(0, count).map((item) => (
                  <div key={item.id}>
                      <img className="photosAPI-images" src={item.image} alt="" />
                    <div className="d-flex photosAPI-descBox">
                        {
                          item.description.length > 10 ?
                          <p>
                            {this.trimDescription(item.description.charAt(0).toUpperCase() + item.description.slice(1))}
                          </p>
                          :
                          <p>{item.description}</p>
                        }
                      <span> ${item.price} </span>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {productsAPI?.slice(8, 11).map((item) => (
                  <div key={item.id}>
                    <img className="photosAPI-images" src={item.image} alt="" />
                    <div className="d-flex photosAPI-descBox">
                      {
                        item.description.length > 100 ?
                        <p>
                          {this.trimDescription(item.description)}
                        </p>
                        :
                        <p>{item.description}</p>
                      }
                      <span> ${item.price} </span>

                    </div>
                  </div>
                ))}
              </SwiperSlide>
              <SwiperSlide>
                {productsAPI?.slice(11, 14).map((item) => (
                  <div key={item.id}>
                    <img className="photosAPI-images" src={item.image} alt="" />
                    <div className="d-flex photosAPI-descBox">
                      {
                        item.description.length > 100 ?
                        <p>
                          {this.trimDescription(item.description)}
                        </p>
                        :
                        <p>{item.description}</p>
                      }
                      <span> ${item.price} </span>

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

export default BestSelling;