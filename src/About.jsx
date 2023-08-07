import React from 'react'
import Web from './images/rocket.png'
import Common from './Common';

const About=()=>{

    return (
        <Common
        name='Welcome to the About Page'
        imgsrc={Web}
        btnname='Contact Us'
        visited='/contact'
    />
    );
}

export default About;