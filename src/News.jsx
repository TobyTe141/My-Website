import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

function News({pageTitle}) {
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
      <h1 className='header'>The News</h1>
        <div className="News-Box">
          <h1 className='News-Title'>Latest Updates</h1>
          <p className="News-text">This Page and Website are still under construction but will hope to be fully functional and ready for pentesting and launch soon</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default function NewsPage() {
  return (
    <News pageTitle={"News"}/>
  );
}

