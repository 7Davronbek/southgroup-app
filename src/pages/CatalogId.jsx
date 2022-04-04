import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";
import Catalog from '../components/Catalog';
import { API } from '../tools/constants';

const CatalogId = (props) => {
    const [catalogById, setCatalogById] = useState([])
    const [loading, setLoading] = useState(false)
        const getTaxeometr = async () => {
            await axios.get( API + `api/category/${props.match.params.id}`)
            .then((res) => {
                console.log(res);
                setCatalogById(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })

    }
    useEffect(() => {
        setLoading(true)
        getTaxeometr()
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
                            <h2><span>T</span>ахеометры</h2>
                        </div>
                    </div>
                    <div className="row">
                            {catalogById?.map((item, index) => {
                                return (
                                    <div className="col-lg-6 mt-5" key={index}>
                                        <Link className='d-flex align-items-center myCard' to={`/new-catalog/${item.id}`}  >
                                            <div>
                                                <img style={{ width: '120px' }} src={`/img/${item.image01}`} alt="" />
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

export default CatalogId