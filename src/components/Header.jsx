import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";
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
                                loop={true}
                                speed={2000}
                                cubeEffect={{
                                    centeredSlides: true,
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, EffectCube, Pagination]}
                                className="swiper mySwiper">

                                <div className="swiper-wrapper">
                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <img src="/img/taxeometr-header-01.webp" alt="" className="card-img" />
                                        <div className="blur"></div>
                                        <div className="card-img-overlay zed">
                                            <h5 className="card-title">
                                                ЛУЧШАЯ ЖИЗНЬ,<br />
                                                СОЗДАННАЯ ДЛЯ ВАС!
                                            </h5>
                                            <Link to='/catalog/taxeometr' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <img src="/img/gnss-header-02.webp" alt="" className="card-img" />
                                        <div className="blur"></div>
                                        <div className="card-img-overlay zed">
                                            <h5 className="card-title">
                                                ЛУЧШАЯ ЖИЗНЬ,<br />
                                                СОЗДАННАЯ ДЛЯ ВАС!
                                            </h5>
                                            <Link to='/catalog/gnss' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{ transition: 'all 2s ease' }} className="swiper-slide card position-relative">
                                        <img src="/img/nivelir-header-03.webp" alt="" className="card-img" />
                                        <div className="blur"></div>
                                        <div className="card-img-overlay zed">
                                            <h5 className="card-title">
                                                ЛУЧШАЯ ЖИЗНЬ,<br />
                                                СОЗДАННАЯ ДЛЯ ВАС!
                                            </h5>
                                            <Link to='/catalog/nivelir' className="myBtn uppercase"
                                            ><span></span> Перейти в Каталог
                                            </Link>
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
