import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Modal, ModalBody } from 'reactstrap'
import NewProduct from '../components/NewProduct';

const CatalogView3 = (props) => {
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [nivelir, setNivelir] = useState([])

    useEffect(() => {
        setLoading(true)

        axios.get(`https://laravelcrudtutorial.000webhostapp.com/api/nivelir/${props.match.params.id}`)
            .then((res) => {
                setNivelir(res.data.nivelir)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [props.match.params.id])
    return (
        <>
            {loading ?
                <div className="loader">
                    <HashLoader loading={loading} size="40" color="red" />
                </div> : ''}

            <div className="ggView pt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <img onClick={() => setIsOpen(true)} className='w-100' src={`/img/${nivelir.image}`} alt="" />
                        </div>

                        <div className="col-lg-6 ml-auto">
                            <h3>{nivelir.title}</h3>
                            <h5 className='mt-4'>{nivelir.price}</h5>

                            <p className="mt-4">{nivelir.description}</p>

                            <a href='tel:+998946408356' className="myBtn view-tel ml-auto"><span></span> Позвонить</a>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            {nivelir.big_description}
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' isOpen={isOpen} toggle={() => setIsOpen(false)} >
                <ModalBody>
                    <img src={`/img/${nivelir.image}`} className='w-100' alt="" />
                </ModalBody>
            </Modal>

            <NewProduct />
        </>
    )
}

export default CatalogView3