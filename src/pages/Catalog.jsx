import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";

const Catalog = () => {
    const [category, setCategory] = useState([])
    const [taxeometr, setTaxeometr] = useState([])
    const [gnss, setGnss] = useState([])
    const [activeTab, setActiveTab] = useState('1');
    const [loading, setLoading] = useState(false)

    const getCategory = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/categories')
            .then((res) => {
                setCategory(res.data.categories)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTaxeometr = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/taxeometr')
            .then((res) => {
                setTaxeometr(res.data.taxeometr)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const getGgss = async() => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/gnss')
            .then((res) => {
                setGnss(res.data.gnss)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        setLoading(true)
        getCategory()
        getTaxeometr()
        getGgss()

        setTimeout(() => {
            setLoading(false)
        }, 1400)
    }, [])

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            {loading ?
                <div className="loader">
                    <HashLoader loading={loading} size="40" color="red" />
                </div> : ''}
            <div className="catalog">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-5">
                            <h4>Catalog</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <Nav tabs className='d-flex flex-column justify-content-end  nav-pills nav-justified'>
                                {category.map((item, index) => {
                                    return (
                                        <NavItem
                                            key={index}
                                        >
                                            <NavLink
                                                className={classnames({ active: activeTab === `${index + 1}` })}
                                                onClick={() => { toggle(`${index + 1}`) }}
                                            >
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    )
                                })}
                            </Nav>
                        </div>

                        <div className="col-lg-9">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <Row className='align-items-center'>
                                        {taxeometr.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex myCard align-items-center' to={`/catalog/${item.id}`}  >
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
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className=''>
                                    <Row>
                                        {gnss.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '120px' }} src={`/img/${item.image}`} alt="" />
                                                        </div>
                                                        {item.title}
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3" className='   '>
                                    <Row>
                                        <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laudantium?</Link>
                                    </Row>
                                </TabPane>

                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog