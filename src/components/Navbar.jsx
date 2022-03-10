import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [student, setStudent] = useState([])
    useEffect(() => {
        getStudent()
    }, [])

    const getStudent = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setStudent(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }
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

            <div className="navbarLine"></div>

            <h1>Student</h1>
            {student?.map((item) => {
                return (
                    <Link to={`/student/${item.id}`} key={item.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3>{item.name}</h3>    
                                <p>{item.company.bs}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default Navbar