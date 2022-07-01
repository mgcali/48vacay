import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../media/logo.jpg';
import Hero from '../media/hero.jpg';
import Filler from '../media/filler.jpg';
import Document from '../pages/document.js';


export default function Home() {
  return (
    <div className={styles.container}>
              
        <Document></Document>
  
     

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><Image src={Logo} alt="logo of 48vacay" width={108} height={100}/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Testimonials</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
     
    </ul>
  </div>
</nav>

      <main className={styles.main}>
      <div>
      <div id="carousel-example-1z" className="carousel slide carousel-fade">

    


<div className="carousel-inner" role="listbox">

  
  <div className="carousel-item active">
    <div className="view">

      
      <Image
      src={Hero}
        alt="hero image" />
      
      <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

        
        <div className="text-center text-white mx-5 wow fadeIn">
        <h1 className={styles.title}>
          48Vacay - Coming Soon!
        </h1>
    
        <p className={styles.description}>
          
          <code className={styles.code}>Under Construction</code>
        </p>

        </div>
        

      </div>
     
    </div>
  </div>
  
</div>




</div>

</div>
<br/><br/>
<div className="container">

     
      <section id="About" className="mt-5 wow fadeIn">

      
        <div className="row">
        <div className="col-md-6 mb-4">

            
<h2 className="my-5 h3 text-center">Founded on Finding the Time</h2>



</div>
         
          <div className="col-md-6 mb-4">

            <Image src={Filler} className="img-fluid z-depth-1-half rounded-circle" alt="man with brown hair and brown eyes, green camo jacket smiling" />

          </div>
          

         
          
          

        </div>
        
       </section>
</div>
      



       

        
      </main>

      <footer className={styles.footer}>
      <div className="footer-copyright py-3">
     <p> © 2022 Copyright
      <a href="#" target="_blank"> 48Vacay </a></p>
    </div>
      </footer>

</div>   
    
  )
}
