import React from 'react'
import  room1  from '../assets/images/pool.avif'
import  room2  from '../assets/images/compound2.avif'
import  room3  from '../assets/images/lubby1.avif'
import  room4  from '../assets/images/photo-1716910729414-302a85b5c3ce.avif'
import  room5  from '../assets/images/photo-1717092068546-2069d5bcc38e.avif'
import  room6  from '../assets/images/premium_photo-1663858367001-89e5c92d1e0e.avif'
import  room7  from '../assets/images/premium_photo-1682148375475-f11bfe03f9e0.avif'
import  room8  from '../assets/images/premium_photo-1683121107354-804160f78eb8.avif'
import  room9  from '../assets/images/premium_photo-1714841433964-2ea7e12d174a.avif'
import  room10  from '../assets/images/photo-1716396484354-e90091645e0b.avif'
import  room11  from '../assets/images/photo-1716632943255-355b59566d11.avif'
import  room12  from '../assets/images/photo-1716702087750-3ac634828e79.avif'
import '../components/Styles.css'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div class="container">
   <div id="carouselExampleFade" className="carousel slide carousel-fade h-200" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active h-200">
        <img src={room1} className="d-block hslide" alt="..." />
      </div>
      <div className="carousel-item h-200">
        <img src={room3} className="d-block hslide" alt="..." />
      </div>
      <div className="carousel-item h-200">
        <img src={room2} className="d-block hslide" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Contact Us Component */}
  <Contact />
  {/* Grid showing images */}
  <div className=''>
    <h4 className='tu'>Rooms</h4>
  </div>
 
  <div class="row mt-5">
    <div class="col">
    <img src={room4} className="d-block w-100 h-100 phot" alt="..." />
    </div>
    <div class="col">
    <img src={room5} className="d-block w-100 h-100 phot" alt="..." />
    </div>
    <div class="col">
    <img src={room6} className="d-block w-100 h-100 phot" alt="..." />
    </div>
  </div>

  <div class="row mt-3">
    <div class="col">
    <img src={room7} className="d-block w-100 h-100 phot" alt="..." />
    </div>
    <div class="col">
    <img src={room8} className="d-block w-100 h-100 phot" alt="..." />
    </div>
    <div class="col">
    <img src={room9} className="d-block w-100 h-100 phot" alt="..." />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
    <img src={room10} className="d-block w-100 h-100 phot" alt="..." />
    </div>
    <div class="col">
    <img src={room11} className="d-block w-100 h-100 phot" alt="..." />
    </div>
    <div class="col">
    <img src={room12} className="d-block w-100 h-100 phot" alt="..." />
    </div>
  </div>
  </div>
  )
}

export default Home
