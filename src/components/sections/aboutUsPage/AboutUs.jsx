import React, { Component } from "react";
import { instance } from "../../../api/instance";
import "../../pages/home/index.css";
// import "";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Ivan from '../../../assets/Ivan.svg'
import './AboutUs.css'

class AboutUs extends Component {
  state = {
    count: 3,
    usersAPI: [],
  };

  componentDidMount() {
    instance.get(`/users`).then((res) => {
      this.setState({
        usersAPI: res.data,
      });
    });
  }

  render() {
    let { count, usersAPI } = this.state;
    console.log(usersAPI);
    return (
      <section id="aboutUs">
        <div className="container-fluid">
          <h2 className="ourProduction">Что думают о нас</h2>
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
              {usersAPI?.slice(0, count).map((item) =>
                <div className="aboutUsBox" key={item.id}>
                  <img className="Ivan" src={Ivan} alt={Ivan} />
                    <strong>
                      {item.name.firstname.charAt(0).toUpperCase() + item.name.firstname.slice(1)}
                      {item.name.lastname.charAt(0).toUpperCase() + item.name.lastname.slice(1)}
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi, optio impedit labore totam distinctio voluptates! Rem suscipit magni harum!
                    </p>
                    <b>{item.phone}</b>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {usersAPI?.slice(0, count).map((item) =>
                <div className="aboutUsBox" key={item.id}>
                  <img className="Ivan" src={Ivan} alt={Ivan} />
                    <strong>
                      {item.name.firstname.charAt(0).toUpperCase() + item.name.firstname.slice(1)}
                      {item.name.lastname.charAt(0).toUpperCase() + item.name.lastname.slice(1)}
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi, optio impedit labore totam distinctio voluptates! Rem suscipit magni harum!
                    </p>
                    <b>{item.phone}</b>
                </div>
              )}
            </SwiperSlide>
            <button className="btn goToCatalogBtn">Перейти в каталог</button>
          </Swiper>
        </div>
      </section>
    );
  }
}

export default AboutUs;
