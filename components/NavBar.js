import Logo from '../media/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';



export default function NavBar() {
    return (
        
        <nav className="navbar  bg-white fixed-top navbar-expand-lg navbar-light scrolling-navbar">
        <div className="container">
    
         
        <Link className="navbar-brand" href="/"><Image src={Logo} alt="logo of 48vacay" width={108} height={100}/></Link>
    
         
          <button className="navbar-toggler " type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <i className='fas fa-bars'></i>
          </button>
    
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
            
            <ul className="navbar-nav me-auto">
              <li className="nav-item p-3">
                <Link className="nav-link" href="/about">About Us </Link>
              </li>
              <li className="nav-item p-3">
                <Link className="nav-link" href="/services">Services</Link>
              </li>
              <li className="nav-item p-3">
                <Link className="nav-link" href="/testimonials">Featured Itineraries</Link>
              </li>
              <li className="nav-item p-3">
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
            </ul>
    
           
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item p-2">
                <a href="https://www.facebook.com/48Vacay/" className="nav-link" target="_blank"  rel="noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item p-2">
                <a href="https://www.instagram.com/48Vacay/" className="nav-link" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item p-2">
                <a href="https://www.youtube.com/channel/UCWDPBfmZ7B9hncCz1tjw8Ig" className="nav-link"
                  target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube mr-2"></i>
                </a>
              </li>
            </ul>
    
          </div>
    
        </div>
      </nav>
    )
  }
  