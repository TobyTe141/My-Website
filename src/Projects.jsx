import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';

function ProjectsPage({pageTitle}) {
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
            <h1 className="header">Projects</h1>
            <ul className="project-list">
                <li className="project-items">
                    <Link to="/tictactoe">Play Game</Link>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default function Projects() {
  return (
    <ProjectsPage pageTitle={"Projects"}/>
  );
}