import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

function About({pageTitle}) {
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
      <h1>About Tic Tac Toe</h1>
      <p>This is a simple Tic Tac Toe game built with React.</p>
      <Link to="/tictactoe">Play Game</Link>
      <Footer />
    </div>
  );
}
export default function AboutPage() {
  return (
    <About pageTitle="About" />
  );
}