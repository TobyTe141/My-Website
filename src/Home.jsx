import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

function HomePage({pageTitle}) {
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
      <h1 className="header">Welcome To My Portfolio</h1>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <HomePage pageTitle="Home" />
  );
}

