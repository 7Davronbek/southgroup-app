import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row foot">
                        <div className="col-lg-3 col-md-12">
                            <div className="logo-footer">
                                <Link to='/' href="#">
                                    <img src="/img/logo.png" style={{ width: '250px' }} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <ul className="d-flex flex-column">
                                <h2>Меню</h2>
                                <li>
                                    <Link to='/catalog'>
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> Услуги </Link>
                                </li>

                                <li>
                                    <Link to='/about' href="#"> О компании </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> Контакты </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex flex-column">
                            <h2>Каталог</h2>
                            <li>
                                <Link to='/catalog/taxeometr'> Тахеометры </Link>
                            </li>
                            <li>
                                <Link to='/catalog/gnss' href="#"> GNSS приемники </Link>
                            </li>
                            <li>
                                <Link to='/catalog/nivelir' href="#"> Нивелиры </Link>
                            </li>
                            <li>
                                <Link to='/catalog/lazerniy' href="#"> Лазерные дальномеры </Link>
                            </li>
                            <li>
                                <Link to='/catalog/teodolit' href="#"> Теодолиты </Link>
                            </li>

                            <li>
                                <Link to='/catalog/trassoiskatel' href="#"> Трассоискатели </Link>
                            </li>
                            <li>
                                <Link to='/catalog/acsessuary' href="#"> Аксессуары </Link>
                            </li>
                        </div>
                        <div className="col-lg-3 col-md-12 d-flex flex-column connect-footer">
                            <h2>Связаться с нами</h2>
                            <div className="icon-footer">
                                <a href='https://www.instagram.com/' target={'_blank'}>
                                    <img src="./img/instagram.png" alt="" />
                                </a>
                                <a href='https://www.facebook.com/' target={'_blank'}>
                                    <img src="./img/facebook.png" alt="" />
                                </a>
                                <a href='https://t.me/IkromovLaziz' target={'_blank'}>
                                    <img src="./img/telegram.png" alt="" />
                                </a>
                                <a href="tel: +998946408356">
                                    <img src="./img/phone.png" alt="" />
                                </a>
                            </div>
                            
                            <Link to='/contacts' className='myBtn mt-3'>
                                <span></span> Персональная консультация →
                            </Link>
                        </div>
                    </div>
                    <p className='text-center'>
                        © 2022 Southgroup. Powered by <a href="https://kokoagency.uz">kOkO digital agency</a>
                    </p>

                </div>
            </div>
        </>
    )
}

export default Footer