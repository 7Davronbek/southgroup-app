import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Katalog = (props) => {
    const [one, setOne] = useState({})
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${props.match.params.id}`)
            .then((res) => {
                setOne(res.data)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [props])
  return (
    <>
        <div className="katalog vh-100 d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={one.url} className='w-100' alt="" />
                    </div>
                    <div className="col-6">
                        <h1>{one.id}</h1>
                        <h5>{one.title}</h5>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia similique, aliquam aspernatur vero libero doloremque at necessitatibus distinctio sit enim ratione officiis nemo! Harum velit fuga sunt illo commodi?
                        
                        <h4 className='mt-5 pt-5 text-right'><Link to='/'>Back</Link></h4>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Katalog