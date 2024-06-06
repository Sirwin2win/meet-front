import React from 'react'
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaPhoneAlt } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className='footercon'>
      <hr />
      <Breadcrumb> 
        <Breadcrumb.Item> 
        <Link className='tu' to={"/"}>Home</Link>
        </Breadcrumb.Item> 
        <Breadcrumb.Item> 
        <Link className='tu' to={"/gallery"}>Gallery</Link>
        </Breadcrumb.Item> 
        <Breadcrumb.Item active> 
        <Link className='tu' to={"/rooms"}>Rooms</Link>
        </Breadcrumb.Item> 
      </Breadcrumb> 
      <hr />
      <div class="row">
  <div className="col-sm-4">
    <p>How can we help?</p>
    <button className='btn btn-primary'> <FaPhoneAlt />   Request a call</button>
    <span className='d-block mt-3'>
    <Link to={'#'}  className='twee'><TiSocialTwitterCircular size='30px' color='duckblue' /></Link>
    <Link to={'#'} className='mx-3'><TiSocialFacebookCircular size='30px' color='delftblue' /></Link>
    <Link to={'#'}><SlSocialInstagram size='25px' color='fuchsia' /></Link>
    <Link to={'#'} className='mx-3'><TiSocialYoutube size='30px' color='red' /></Link>
    <Link to={'#'}><TiSocialPinterestCircular size='30px' color='red' /></Link>

    </span>
  </div>
  <div className="col-sm-3"></div>
  <div className="col-sm-2"><ul className='hoteloptions'>
        <li><Link to={'#'}>Hotel gift card</Link></li>
        <li><Link to={'#'}>Pet-Friendly Stays</Link></li>
        <li><Link to={'#'}>Travel Inspiration</Link></li>
        <li><Link to={'#'}>Customer Support</Link></li>
        <li><Link to={'#'}>Web Accessibility</Link></li>
        <li><Link to={'#'}>Development</Link></li>
        <li><Link to={'#'}>Media</Link></li>
        <li><Link to={'#'}>Careers</Link></li>
    </ul></div>
    
    <div className="col-sm-2"><ul className='hoteloptions'>
        <li><Link to={'#'}>Hotel gift card</Link></li>
        <li><Link to={'#'}>Pet-Friendly Stays</Link></li>
        <li><Link to={'#'}>Travel Inspiration</Link></li>
        <li><Link to={'#'}>Customer Support</Link></li>
        <li><Link to={'#'}>Web Accessibility</Link></li>
        <li><Link to={'#'}>Development</Link></li>
        <li><Link to={'#'}>Media</Link></li>
        <li><Link to={'#'}>Careers</Link></li>
    </ul></div>
</div>
<footer>&copy; 2024 ValleyView Hotel</footer>

    </div>
  )
}

export default Footer
