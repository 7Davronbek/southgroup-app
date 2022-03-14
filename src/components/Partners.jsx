import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="container">
          <h2><span>Н</span>аши партнеры</h2>
          <div className="row partner d-flex align-items-center">
            <div className="col-5 left">
              <h5>Компании сотрудничают с нами по всему миру</h5>
              <p>На данный момент дилерская сеть фабрики «Экми-Мебель» насчитывает более 30 салонов по всей Украине. Сейчас мы заинтересованы  в расширении сети и предлагаем выгодные условия для сотрудничества.
                <br /><br />                Основным преимуществом фабрики является изготовление любого индивидуального изделия, мягкой мебели и аксессуаров из наших основных коллекций. Также присутствует линейка оригинальных интерьерных корпусных изделий.</p>
            </div>
            <div className="col-5 right">
              <span className='top-span'>.</span>
              <img src="./img/partners-01.png" alt="" />
              <span className='bot-span'>.</span>
            </div>
          </div>

          <div className="brend-partners">
            <div className="container">
              <div className="row">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src="./img/client-01.jpg" alt="" className='w-100'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/client-02.png" alt="" className='w-100'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/client-03.png" alt="" className='w-100'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/client-04.jpg" alt="" className='w-100'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/client-05.png" alt="" className='w-100'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/client-06.png" alt="" className='w-100'/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="./img/client-07.png" alt="" className='w-100'/>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Partners