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
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/taxeometr'>
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
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/gnss'>
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
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/nivelir'>
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
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/lazerniy'>
                                        <img
                                            src="/img/lazerniy-category.webp"
                                            alt=""
                                            className="w-100"
                                            height="300px"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">Лазерные дальномеры</h5>
                                        </div>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/teodolit'>
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
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/trassoiskatel'>
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
                        <div className="col-lg-3 mt-5 col-md-6 pop-category">
                                <div className="card h-100">
                                    <Link to='/catalog/acsessuary'>
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
        </>
    )
}

export default Catalog