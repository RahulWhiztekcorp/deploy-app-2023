import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div id="carouselExampleInterval" className="carousel slide mb-3" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
            <img src={require('../images/pic-1.jpg')} className="d-block w-100" alt="FirstSlide"/>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
            <img src={require('../images/pic-2.jpg')} className="d-block w-100" alt="SecondSlide"/>
            </div>
            <div className="carousel-item">
            <img src={require('../images/pic-3.jpg')} className="d-block w-100" alt="ThirdSlide"/>
            </div>
            <div className="carousel-item">
            <img src={require('../images/pic-4.jpg')} className="d-block w-100" alt="FourSlide"/>
            </div>
            <div className="carousel-item">
            <img src={require('../images/pic-5.jpg')} className="d-block w-100" alt="FiveSlide"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <center>
        <Link to="/create" className='text-decoration-none mx-1'>
                <button className="btn btn-outline-primary px-2">Create</button>
        </Link>
        <Link to="/read" >
            <button className="btn btn-outline-primary">Show Data</button>
        </Link>
    </center>

   </>
  )
}

export default Home;