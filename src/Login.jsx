import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

function Login({pageTitle}) {
  const originalTitle = useRef(document.title).current;
  useEffect(() => { 
    document.title = pageTitle;
    return () => {
      document.title = originalTitle;
    };
  }, [pageTitle]);

  return (
    <div className="App">
      <Navbar />
      <h1 className='header'>Login</h1>
      <p className="center-text">This page is under construction.</p>
      <Footer />
    </div>
  );
}


export default function LoginPage() {
  return (
    <Login pageTitle="Login" />
  );
}

