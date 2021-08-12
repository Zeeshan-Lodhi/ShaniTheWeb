import React from 'react'
function Common(props) {
    return (
        <>
            <section id="header" className=" d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className="row">
                                <div className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.heading}<strong className="brand_name"> Zeeshan Lodhi</strong></h1>
                                    <h2 className="my-3">We are the team of the talented web devolpers</h2>
                                    <div className="mt-3">
                                        <a href="" className="getStsrted ">{props.bname}</a>
                                    </div>
                                </div>

                                <div className=" col-lg-6 order-1 order-lg-2">
                                    <img src={props.imgsrc}  className="img_animation h_img" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common
