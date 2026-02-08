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
    <div>
      <div className="App">
      <Navbar />
      {/*Why Are you looking in here?*/}
      <h1 className="home-header-1" >Hello, I am Toby Painter</h1>
      <p className="home-text">Welcome to my portfolio website, I created this website <br/> to showcase my projects and to show off my web development <br/>skills
        Please explore the <Link to="/projects">projects page</Link>, and feel free to reach out <br/> through the <Link to="/contact">contact page</Link> if you have any questions.
      </p>
      </div>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <HomePage pageTitle="Home" />
  );
}

