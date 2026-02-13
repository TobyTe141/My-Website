import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';
import InstagramLogo from './assests/Socials Page/Instagram-Logo.png';
import EmailLogo from './assests/Icons/Socials-Icons/Dark-mode-emails.webp';


function Contact({pageTitle}) {
  const originalTitle = useRef(document.title).current;
  useEffect(() => { 
    document.title = pageTitle;
    return () => {
      document.title = originalTitle;
    };
  }, [pageTitle]);
  return (
    <div >
      <div className="App">
        <Navbar />
        <h1 className='socials-header'>Contacts:</h1>
          <ul style={{listStyle:'none'}}>
            <li className="Socials-items">  
              <div className="socials-card">
                <div className='socials-list'>
                  <div><img src={EmailLogo} className="Socials-logos" alt="Email Logo"/></div>
                  <div><Link to="mailto:Toby.Painter@proton.me" className='Email-link'>Toby.Painter@proton.me</Link></div>
                </div>
              </div>  
              <div className="socials-card">
                <div className='socials-list'>
                  <div><img src={InstagramLogo} className="instagram-logo" alt="Instagram Logo"/></div>
                  <div><Link to="https://www.instagram.com/TobyTe141" className='socials-link'>TobyTe141</Link></div>
                </div>
              </div>    
            </li>
          </ul>
        <Footer />
      </div>
      <Footer />
    </div>
  );
}


export default function ContactPage() {
  return (
    <Contact pageTitle='Contacts'/>
  );
}

