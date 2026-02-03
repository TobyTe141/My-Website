import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import TicTacToe from './TicTacToe.jsx';
import Contact from './Contact.jsx';
import ErrorPage from './Error.jsx';
import Projects from './Projects.jsx';
import Login from './Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/projects" element={<Projects />} />]
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;    