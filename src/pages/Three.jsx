import React from 'react'
import Spline from '@splinetool/react-spline';

const Three = () => {
    return (
        <>
            <div className="three">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aut vitae laboriosam, aspernatur officia asperiores illum deserunt saepe repudiandae nobis provident quos dolores maxime fugit numquam aliquid quasi! Enim, distinctio.
                        </div>

                        <div className="vh-100"></div>

                        <div className="col-12">
                            <Spline
                                scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline"
                            />

                            <Spline 
                                scene='https://app.spline.design/file/9ca9da2b-00d5-42b3-933c-144f74d668ae'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Three