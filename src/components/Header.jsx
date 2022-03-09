import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12 header-swiper">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide card position-relative">
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
                </div>
                <div className="swiper-slide card position-relative">
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
                </div>
                <div className="swiper-slide card position-relative">
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
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header