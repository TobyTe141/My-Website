import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useRef, useEffect } from 'react';
import TicTacToe from './assests/Projects Page/Tic-Tac-Toe.webp';

function ProjectsPage({pageTitle}) {
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
            <h1 className="header">Projects:</h1>
                <ul>   
                    <li className="project-items">
                        <div className="project-card">
                            <div className='project-list'>
                                <div><h2 className="project-title">Tic Tac Toe</h2></div>
                                <div><Link to="/TicTacToe"><button className="play-button">Play Game</button></Link></div>
                            </div>
                            <img src={TicTacToe} alt="Tic Tac Toe" className="project-image"/>
                        </div>
                        
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default function Projects() {
  return (
    <ProjectsPage pageTitle={"Projects"}/>
  );
}