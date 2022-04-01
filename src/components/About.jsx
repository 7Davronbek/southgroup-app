import React from 'react'
import History from './History'
import Number from './Number'
import Partners from './Partners'

const About = () => {
  return (
    <>
        <div className="about">
            <div className="container">
                <div className="row">
                    <h2><span>O</span> компании</h2>
                </div>
            </div>
        </div>
        <History />
        <Number />
        <Partners />
    </>
  )
}

export default About