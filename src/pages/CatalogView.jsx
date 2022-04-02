import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Modal, ModalBody } from 'reactstrap'
import NewProduct from '../components/NewProduct';

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { Pagination } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { API } from '../tools/constants';


const CatalogView = (props) => {
    const [catalog, setCatalog] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios.get(API + `api/product/${props.match.params.id}`)
            .then((res) => {
                // setCatalog(res.data.taxeometr)
                console.log(res);
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [props.match.params.id])
    return (
        <>
            {loading ?
                <div className="loader">
                    <HashLoader loading={loading} size="40" color="red" />
                </div> : ''}

            <div className="catalogView pt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-flex productImages">
                            {/* <img onClick={() => setIsOpen(true)} className='w-100' src={`/img/${catalog.image}`} alt="" /> */}

                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Pagination, Thumbs]}
                                className="mySwiper2 w-75"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                direction={"vertical"}
                                slidesPerView={4}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                                watchSlidesProgress={true}
                                modules={[Pagination, FreeMode, Navigation, Thumbs]}
                                className="mySwiper w-10"
                            >
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-100 h-100' />
                                </SwiperSlide>
                            </Swiper>

                        </div>

                        <div className="col-lg-6 ml-auto">
                            <h3>{catalog.title}</h3>
                            <h5 className='mt-4'>{catalog.price}</h5>

                            <p className="mt-4">{catalog.description}</p>

                            <a href='tel:+998946408356' className="myBtn view-tel ml-auto"><span></span> Позвонить</a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            {catalog.big_description}
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' isOpen={isOpen} toggle={() => setIsOpen(false)} >
                <ModalBody>
                    <img src={`/img/${catalog.image}`} className='w-100' alt="" />
                </ModalBody>
            </Modal>

            <NewProduct />
        </>
    )
}

export default CatalogView