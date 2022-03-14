import React from 'react'
import { Link } from 'react-router-dom'

const History = () => {
  return (
    <>
        <div className="history">
            <div className="container">
                
                <div className="row d-flex justify-content-center history-01">
                    <div className="col-6 left">
                        <img src="./img/history-01.png" alt="" />
                        <span>.</span>
                    </div>         
                    <div className="col-6 right">
                        <span className='furn'>furniture</span>
                        <h1>
                            <span>И</span>ндивидуальная мебель
                        </h1>
                        <h5>Полный цикл производства.</h5>
                        <p>Качество мягкой мебели начинается задолго до начала ее производства.</p>
                        <a href="" className='myBtn'><span></span>Индивидуальная мебель</a>
                    </div>
                </div>    

                <h2><span>Н</span>аша история</h2>
                <div className="row history-02">
                    <div className="col-4 left">
                        <h5>Наработки длинной в 25 лет</h5>
                        <p>Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей </p>
                        <span>.</span>
                    </div>
                    <div className="col-6 right">
                        <img src="./img/history-02.png" alt="" />
                    </div>   
                </div>    
            </div>                                    
        </div>              
    </>
  )
}

export default History