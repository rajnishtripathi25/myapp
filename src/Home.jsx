import React from 'react'
import Web from './images/rocket.png'
import Common from './Common'
import Footer from './Footer'


const Home = () => {
    return (
    <>

    <Common
        name='Grow Your Business with'
        imgsrc={Web}
        btnname='Get Started'
        visited='/service'
    />
    
    </>)
}

export default Home;