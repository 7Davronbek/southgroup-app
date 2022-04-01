import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import Catalog from '../components/Catalog';

const Teodolit = () => {
    const [teodolit, setTeodolit] = useState([])
    const [loading, setLoading] = useState(false)
    const getTeo = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/teodolit')
            .then((res) => {
                setTeodolit(res.data.teodolit)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        setLoading(true)
        getTeo()
        setTimeout(() => {
            setLoading(false)
        }, 1400)
    }, [])
    return (
        <>
            {loading ?
                <div className="loader">
                    <HashLoader loading={loading} size="40" color="red" />
                </div> : ''}
            <div className="catalog-products">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-5">
                            <h2><span>Т</span>еодолиты</h2>
                        </div>
                    </div>
                    <div className="row">
                        {teodolit.map((item, index) => {
                            return (
                                <div className="col-lg-6 mb-4" key={index}>
                                    <Link className='d-flex align-items-center myCard' to={`/catalog-teodolit/${item.id}`}  >
                                        <div>
                                            <img style={{ width: '120px' }} src={`/img/${item.image}`} alt="" />
                                        </div>
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p className='mt-3'>{item.description.substring(0, 40)}...</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Catalog />
        </>
    )
}

export default Teodolit