import axios from 'axios'
import React, { useEffect, useState } from 'react'

const See = (props) => {
    console.log(props);
    console.log(props.match.params.id);
    const [one, setOne] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
            .then((res) => {
                console.log(res);
                setOne(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h3>{one.name}</h3>
                                <p>{one.email}</p>
                                <a href={`tel: ${one.phone}`}>{one.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default See