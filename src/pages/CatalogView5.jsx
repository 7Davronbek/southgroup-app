import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Modal, ModalBody } from 'reactstrap'

const CatalogView5 = (props) => {
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [teodolit, setTeo] = useState([])

    useEffect(() => {
        setLoading(true)

        axios.get(`https://laravelcrudtutorial.000webhostapp.com/api/teodolit/${props.match.params.id}`)
            .then((res) => {
                setTeo(res.data.teodolit)
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
                            <img onClick={() => setIsOpen(true)} className='w-100' src={`/img/${teodolit.image}`} alt="" />
                        </div>

                        <div className="col-lg-6 ml-auto">
                            <h3>{teodolit.title}</h3>
                            <h5 className='mt-4'>{teodolit.price}</h5>

                            <p className="mt-4">{teodolit.description}</p>

                            <button className="btn btn-outline-danger px-4 py-2 d-block ml-auto mt-5">Pozvonit</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            {teodolit.big_description}
                        </div>
                    </div>
                </div>
            </div>

            <Modal className='modal-lg' isOpen={isOpen} toggle={() => setIsOpen(false)} >
                <ModalBody>
                    <img src={`/img/${teodolit.image}`} className='w-100' alt="" />
                </ModalBody>
            </Modal>
        </>
    )
}

export default CatalogView5