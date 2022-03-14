import React from 'react'
import { Link } from 'react-router-dom'

const Catalog = () => {
    return (
        <>
            <div className="pop-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2><span>П</span>опулярный каталог</h2>
                        </div>
                        <div className="col-12 d-flex mt-5">
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/taxeometr-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Тахеометры</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/gnss-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">GNSS приемники</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/nivelir.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Нивелиры</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/lazerniy-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="280px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Лазерные дальномеры</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-flex pop-categories mt-4">
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/teodolit-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Теодолиты</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/trassoiskatel-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Трассоискатели</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-3 pop-category">
                                <div className="card h-100">
                                    <Link to='/'>
                                        <img
                                            src="/img/acsessuary-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Аксессуары</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog