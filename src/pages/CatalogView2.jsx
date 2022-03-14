import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Modal, ModalBody } from 'reactstrap'

const CatalogView2 = (props) => {
    const [gg, setGg] = useState({})
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setLoading(true)

        axios.get(`https://laravelcrudtutorial.000webhostapp.com/api/gnss/${props.match.params.id}`)
            .then((res) => {
                setGg(res.data.gnss)
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
                            <img onClick={() => setIsOpen(true)} className='w-100' src={`/img/${gg.image}`} alt="" />
                        </div>

                        <div className="col-lg-6 ml-auto">
                            <h3>{gg.title}</h3>
                            <h5 className='mt-4'>{gg.price}</h5>

                            <p className="mt-4">{gg.description}</p>

                            <button className="btn btn-outline-danger px-4 py-2 d-block ml-auto mt-5">Pozvonit</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            {gg.big_description}
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' isOpen={isOpen} toggle={() => setIsOpen(false)} >
                <ModalBody>
                    <img src={`/img/${gg.image}`} className='w-100' alt="" />
                </ModalBody>
            </Modal>
        </>
    )
}

export default CatalogView2