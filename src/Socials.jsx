import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

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
        <h1>Contact</h1>
        <p>Reach out at <a href="mailto:hello@example.com">hello@example.com</a></p>
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

