import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
import { API } from "../tools/constants";

const NewProduct = () => {
    const [product, setProduct] = useState([])
    const getNewProduct = () => {
        axios.get( API + 'api/product')
            .then((res) => {
                console.log(res);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    useEffect(() => {
        getNewProduct()
    }, [])

    return (
        <>
            <div className="newProduct">
                <div className="container">
                    <div className="row">
                            <h2><span>Н</span>овинки</h2>
                            <Swiper
                                slidesPerView={3.5}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper mt-5"
                            >
                                {product.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Link to={`/new-catalog/${item.id}`} className="card h-100">
                                                <img src={`../img/${item.image01}`} className="card-img-top w-100" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p className="card-text">{item.price}</p>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewProduct