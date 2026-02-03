import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function ProjectsPage() {
    return (
        <div className="App">
            <Navbar />
            <h1 className="header">Projects</h1>
            <ul className="project-list">
                <li className="project-items">
                    <Link to="/tictactoe">Play Game</Link>
                </li>
            </ul>
        </div>
    )
}

export default function Projects() {
  return (
    <ProjectsPage />
  );
}