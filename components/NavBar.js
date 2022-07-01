import Logo from '../media/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';



export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="/"><Image src={Logo} alt="logo of 48vacay" width={108} height={100}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item active">
        <Link className="nav-link" href="/about">About Us </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/testimonials">Testimonials</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="/contact">Contact Us</Link>
      </li>
           
          </ul>
        </div>
      </nav>
    )
  }