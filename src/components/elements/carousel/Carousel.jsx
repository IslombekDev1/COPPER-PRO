import React, { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { instance } from "../../../api/instance";

class Carousel extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
      instance.get(`/products`)
          .then(res => {
              this.setState({
                  products: res.data
              })
          })
      }

  render() {
    const { products } = this.state;
    return (
      <>
        <Swiper
          // for responsive
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {products?.map((item) => (
            <SwiperSlide>
              <div style={{ width: "100vw" }}>
                <img
                  style={{ width: "100vw" }}
                  src={item.image}
                  alt={item.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
}

export default Carousel;
