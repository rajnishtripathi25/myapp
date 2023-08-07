import React from 'react'
import Card from './Card';
import Sdata from './Sdata';

const Service=()=>{

    return (
        <>
          <div className="container-fluid">
            <div className="row justify-content-center my-5">
                <h1 className='text-center'>
                    Our Services
                </h1>
                <div className="col-10">
                    <div className="row d-flex justify-content-around">
                        {Sdata.map((item,index)=>{
                            
                           return  <Card
                                key={index} 
                                imgsrc={item.imgsrc}
                                title={item.title}
                            />
                        })}
                    </div>
                </div>
            </div>
          </div> 
        </>
    );
}

export default Service;