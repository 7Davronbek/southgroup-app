import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <div className="navBar">
                <div className="container">
                    <div className="row">
                        <div className="nav-01 col-12">
                            <ul className="d-flex justify-content-between align-items-center">
                                <li>
                                    <Link to='/'
                                        href="#"
                                        className="katalog"
                                        id="katalog"
                                    >
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> Услуги </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#">
                                        <img src="/img/logo.svg" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> О компании </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> Контакты </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar