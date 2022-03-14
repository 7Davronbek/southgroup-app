import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";

const LastProduct = () => {
    const [product, setProduct] = useState([])
    const getNewProduct = () => {
        axios.get('https://laravelcrudtutorial.000webhostapp.com/api/products')
            .then((res) => {
                setProduct(res.data.products)
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
                        <div className="col-12 mt-3">
                            <h2><span>П</span>оследние публикации</h2>
                            <Swiper
                                slidesPerView={3.5}
                                spaceBetween={30}
                                loop={true}
                                autoplay={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper mt-5"
                            >
                                {product.map((item, index) => {
                                    return (
                                        <SwiperSlide className="h-100" key={index}>
                                            <Link to={`/new-catalog/${item.id}`} className="card h-100 ">
                                                <img src={`./img/${item.image}`} className="card-img-top" alt="" />
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
            </div>
        </>
    )
}

export default LastProduct