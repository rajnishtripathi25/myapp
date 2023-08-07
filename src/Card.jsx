import React from 'react'


const Card = (props) => {
    
    return <>
        
            <div className="card m-2 p-0" style={{width: '18rem'}}>
                <img src={props.imgsrc} className="card-img-top" alt="not found"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href='#' className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
       
    </>
}

export default Card;