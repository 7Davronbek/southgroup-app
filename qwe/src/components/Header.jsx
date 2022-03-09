import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <>

            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 header-swiper">
                            <Swiper
                                effect={"cube"}
                                grabCursor={true}
                                cubeEffect={{
                                    spaceBetween: 30,
                                    loop: true,
                                    centeredSlides: true,
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                pagination={true}
                                modules={[EffectCube, Pagination]}
                                className="swiper mySwiper">

                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide card position-relative">
                                        <img src="/img/header-01.png" alt="" className="card-img" />
                                        <div className="blur"></div>
                                        <div className="card-img-overlay zed">
                                            <h5 className="card-title">
                                                ЛУЧШАЯ ЖИЗНЬ,<br />
                                                СОЗДАННАЯ ДЛЯ ВАС!
                                            </h5>
                                            <Link to='/' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог</Link
                                            >
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card position-relative">
                                        <img src="/img/header-02.png" alt="" className="card-img" />
                                        <div className="blur"></div>
                                        <div className="card-img-overlay zed">
                                            <h5 className="card-title">
                                                ЛУЧШАЯ ЖИЗНЬ,<br />
                                                СОЗДАННАЯ ДЛЯ ВАС!
                                            </h5>
                                            <Link to='/' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог</Link
                                            >
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide card position-relative">
                                        <img src="/img/header-03.png" alt="" className="card-img" />
                                        <div className="blur"></div>
                                        <div className="card-img-overlay zed">
                                            <h5 className="card-title">
                                                ЛУЧШАЯ ЖИЗНЬ,<br />
                                                СОЗДАННАЯ ДЛЯ ВАС!
                                            </h5>
                                            <Link to='/' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог</Link
                                            >
                                        </div>
                                    </SwiperSlide>
                                </div>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
