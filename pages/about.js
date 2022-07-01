import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../media/hero.jpg';
import Filler from '../media/filler.jpg';
import Document from '../pages/document.js';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function About() {
    return (
        <div className={styles.container}>
              
        <Document/>
        <NavBar/>
  
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
            
            <code className={styles.code}>About Us</code>
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
  
       <Footer/>
  </div>   
    ) 
  }