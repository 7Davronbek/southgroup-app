import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Footer = () => {
    const [categories, setCategories] = useState([])

    const getAllCategory = () => {
        axios.get('https://laravelcrudtutorial.000webhostapp.com/api/categories')
            .then((res) => {
                setCategories(res.data.categories)
            })
            .catch(err => { console.log(err); })
    }
    useEffect(() => {
        getAllCategory()
    }, [])
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row foot">
                        <div className="col-3">
                            <div className="logo-footer">
                                <Link to='/' href="#">
                                    <img src="/img/logo.png" style={{ width: '250px' }} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <ul className="d-flex flex-column">
                                <li>
                                    <Link to='/products'>
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> Услуги </Link>
                                </li>
                                <li>

                                </li>
                                <li>
                                    <Link to='/' href="#"> О компании </Link>
                                </li>
                                <li>
                                    <Link to='/' href="#"> Контакты </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3 d-flex flex-column">
                            {categories.map((item, index) => {
                                return (
                                    <Link
                                        key={index}
                                        className='category_name'
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="col-3 d-flex flex-column">
                            <a href=''>
                                INSTAGRAM
                            </a>
                            <a href=''>
                                FACEBOOK
                            </a>
                            <a href="tel: +998946408356">
                                +998 (94)-640-83-56
                            </a>
                            <Link to='/' className='myBtn'>
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