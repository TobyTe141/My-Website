import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

function Error({pageTitle}) {
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
      <h1 className='header'>404 — Page not found</h1>
      <Link to="/" className="center-text">Go home</Link>
      </div>
      <Footer />
    </div>
  );
}


export default function ErrorPage() {
  return (
    <Error pageTitle="Error" />
  );
}
