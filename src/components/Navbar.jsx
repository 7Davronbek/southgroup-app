import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { API } from '../tools/constants';

const Navbar = () => {

    const [myTabs, setMyTabs] = useState(false)
    const [activeTab, setActiveTab] = useState('1');
    const [navbar, setNavbar] = useState(false);
    const [categories, setCategories] = useState([])
    const location = useLocation()


    const [taxeometr, setTaxeometr] = useState([])
    const [gnss, setGnss] = useState([])
    const [nivelir, setNivelir] = useState([])
    const [lazerniy, setLazerniy] = useState([])
    const [teodolit, setTeodolit] = useState([])
    const [trassoiskatel, setTrassoiskatel] = useState([])
    const [acsessuary, setAcsessuary] = useState([])



    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getAllCategory = () => {
        axios.get(API + 'api/category')
            .then((res) => {
                setCategories(res.data)
            })
            .catch(err => { console.log(err); })
    }

    const changeNavbar = () => {
        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);



    const getTaxeometr = async () => {
        await axios.get(API + 'api/category/1')
            .then((res) => {
                setTaxeometr(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    const getGgss = async () => {
        await axios.get(API + 'api/category/2')
            .then((res) => {
                setGnss(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getNivelir = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/nivelir')
            .then((res) => {
                setNivelir(res.data.nivelir)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getLazerniy = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/lazerniy')
            .then((res) => {
                setLazerniy(res.data.lazerniy)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTeo = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/teodolit')
            .then((res) => {
                setTeodolit(res.data.teodolit)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTrass = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/trassoiskatel')
            .then((res) => {
                setTrassoiskatel(res.data.trassoiskatel)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getAcs = async () => {
        await axios.get('https://laravelcrudtutorial.000webhostapp.com/api/acsessuary')
            .then((res) => {
                setAcsessuary(res.data.acsessuary)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        getAllCategory()
        getTaxeometr()
        getGgss()
        getNivelir()
        getLazerniy()
        getTeo()
        getTrass()
        getAcs()
    }, [])

    return (
        <>

            <div className={`navBar ${navbar ? 'active' : null}`}>
                <div className="container">
                    <div className="row">
                        <div className="nav-01 col-12">
                            <ul className="d-flex justify-content-between align-items-center">
                                <li>
                                    <Link to='/catalog'
                                        onClick={() => setMyTabs(false)}
                                        className={`katalog ${location.pathname === '/catalog' ? 'active' : ''}`}
                                        onMouseEnter={() => setMyTabs(true)}
                                        id="katalog"
                                    >
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/services' ? 'active' : ''}`} onClick={() => setMyTabs(false)} to='/services'> Услуги </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMyTabs(false)} to='/'>
                                        <img src="/img/logo.png" style={{ width: '180px' }} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/about' ? 'active' : ''}`} onClick={() => setMyTabs(false)} to='/about'> О компании </Link>
                                </li>
                                <li>
                                    <Link className={`${location.pathname === '/contacts' ? 'active' : ''}`} onClick={() => setMyTabs(false)} to='/contacts'> Контакты </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>


            <div onMouseLeave={() => setMyTabs(false)} className={`myTab ${myTabs ? 'active' : ''} ${navbar ? 'actived' : null}`}>
                <div onClick={() => setMyTabs(false)} className="closes">x</div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Nav tabs className='d-flex flex-column justify-content-end  nav-pills nav-justified'>
                                {categories.map((item, index) => {
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
                        <div className="col-6">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <Row>
                                        {taxeometr.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-taxeometr/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image01.substring(0, 40)}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className='   '>
                                    <Row>
                                        {gnss.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-gnss/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image01.substring(0, 40)}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3" className='   '>
                                    <Row>
                                        {nivelir.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-nivelir/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="4" className='   '>
                                    <Row>
                                        {lazerniy.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-lazerniy/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="5" className='   '>
                                    <Row>
                                        {teodolit.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-teodolit/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="6" className='   '>
                                    <Row>
                                        {trassoiskatel.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-trassoiskatel/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="7" className='   '>
                                    <Row>
                                        {acsessuary.map((item, index) => {
                                            return (
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <Link className='d-flex align-items-center' to={`/catalog-acsessuary/${item.id}`}  >
                                                        <div>
                                                            <img style={{ width: '80px' }} src={`/img/${item.image}`} alt="" />
                                                        </div>
                                                        <div className='ml-2'>
                                                            <h6>{item.title}</h6>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
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

export default Navbar