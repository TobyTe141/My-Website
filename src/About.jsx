
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="App">
      <Navbar />
      <h1>About Tic Tac Toe</h1>
      <p>This is a simple Tic Tac Toe game built with React.</p>
      <Link to="/tictactoe">Play Game</Link>
    </div>
  );
}