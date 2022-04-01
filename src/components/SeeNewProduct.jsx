import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Modal, ModalBody } from 'reactstrap'
import Catalog from './Catalog';

const SeeNewProduct = (props) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const getNewProduct = () => {
        setLoading(true)
        axios.get(`https://laravelcrudtutorial.000webhostapp.com/api/products/${props.match.params.id}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data.product)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getNewProduct()
    }, [])
    return (
        <>
            {loading ?
                <div className="loader">
                    <HashLoader loading={loading} size="40" color="red" />
                </div> : ''}
            <div className="seeNewProduct pt-5 mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <img onClick={() => setIsOpen(true)} className='w-100' style={{ cursor:'pointer', backgroundColor: 'red' }} src={`/img/${product.image}`} alt="" />
                        </div>

                        <div className="col-lg-6 ml-auto">
                            <h3>{product.title}</h3>
                            <h5 className='mt-4'>{product.price}</h5>

                            <p className="mt-4">{product.description}</p>

                            <a href='tel:+998946408356' className="myBtn view-tel ml-auto"><span></span> Позвонить</a>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <h5>{product.big_description}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' isOpen={isOpen} toggle={() => setIsOpen(false)} >
                <ModalBody>
                    <img src={`/img/${product.image}`} className='w-100' alt="" />
                </ModalBody>
            </Modal>

                <Catalog/>
        </>
    )
}

export default SeeNewProduct
