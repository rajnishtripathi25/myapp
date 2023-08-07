import React from 'react'


const Common = (props) => {

    return ( 
        <>
            <section id='header' className='my-5'>
                <div className="container-fluid">
                    <div className="row justify-content-center my-5" id='container'>
                      

                        <div className="col-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-start">
                            <h2>{props.name} <strong className='brand-name'>EasyCodingzone</strong></h2>
                            <p className='my-3'>We are the team of talented developer making websites</p>
                            <button className='btn btn-outline-primary rounded-5' >
                                <a href={props.visited} >{props.btnname}</a>
                            </button>
                        </div>
                        <div className="col-5 order-1 order-lg-2 text-center">
                            <img src={props.imgsrc} alt="Web img" className='img-fluid imgheader animated'/>
                        </div>
                      </div>
                    </div>
                

            </section>
        </>
    );
}

export default Common;