import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='header'>Login</h1>
    </div>
  );
}


export default function LoginPage() {
  return (
    <Login />
  );
}

