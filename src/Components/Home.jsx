import React from 'react'
import Products from './Products';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="./assets/bg1.jpg" className="card-img" alt="Background" 
                height="700px"/>
                    <div className="card-img-overlay display-flex flex-column">
                        <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
                        <p className="card-text lead fs-2">
                            CHECK OUT ALL TRENDS
                        </p>
                        </div>
                    </div>
            </div>
            <Products/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home;