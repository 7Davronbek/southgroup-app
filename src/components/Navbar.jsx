import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';

const Navbar = () => {

    const [myTabs, setMyTabs] = useState(false)
    const [activeTab, setActiveTab] = useState('1');
    const [navbar, setNavbar] = useState(false);
    const [categories, setCategories] = useState([])


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    const getAllCategory = () => {
        axios.get('https://laravelcrudtutorial.000webhostapp.com/api/categories')
            .then((res) => {
                setCategories(res.data.categories)
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

    useEffect(() => {
        getAllCategory()
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
                                        className={`katalog`}
                                        onMouseEnter={() => setMyTabs(true)}
                                        id="katalog"
                                    >
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMyTabs(false)}  to='/'> Услуги </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMyTabs(false)}  to='/'>
                                        <img src="/img/logo.png" style={{ width: '180px' }} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMyTabs(false)}  to='/'> О компании </Link>
                                </li>
                                <li>
                                    <Link onClick={() => setMyTabs(false)}  to='/'> Контакты </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbarLine"></div>


            <div className={`myTab ${myTabs ? 'active' : ''} ${navbar ? 'actived' : null}`}>
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
                                        <Link to='/'>Lorem ipsum dolor sit amet.</Link>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2" className='   '>
                                    <Row>
                                        <Link to='/'>Lorem, ipsum.</Link>
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

export default Navbar