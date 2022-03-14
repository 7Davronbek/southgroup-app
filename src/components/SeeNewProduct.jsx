import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SeeNewProduct = (props) => {
    const [product, setProduct] = useState({})
    const getNewProduct = () => {
        axios.get(`https://laravelcrudtutorial.000webhostapp.com/api/products/${props.match.params.qwe}`)
            .then((res) => {
                console.log(res);
                setProduct(res.data.product)
                console.log(product);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getNewProduct()
    }, [])
  return (
    <>
        <div className="seeNewProduct pt-5 mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <img src={`/img/${product.image}`} className='w-100' alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h5>{product.big_description}</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SeeNewProduct
