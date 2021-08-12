import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
function Servises() {
    return (
        <>
            <div className="my-5">
                <h1 className=" sheading text-center">Our Services</h1>
            </div>
            <div className="container-fluid services mb-auto">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind)=>{
                                    return <Card
                                    key={ind}
                                    imgsrc = {val.imgsrc}
                                    title = {val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Servises
