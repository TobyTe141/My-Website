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
    <div>
      <div className="App">
      <Navbar />
        <h1 className='header'>Login</h1>
        <p className="center-text">This page was meant for a backend connected login system but due to security conserns, cost and the work required it has currently been scrapped I might come back to this later but for now its not worth it</p>
        <div className="center-items">
        <Link to="/"><button className='button'>Return Home Page</button></Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default function LoginPage() {
  return (
    <Login pageTitle="Login" />
  );
}

