import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="App">
      <Navbar />
      <h1 className='header'>404 — Page not found</h1>
      <Link to="/" className="center-text">Go home</Link>
    </div>
  );
}


export default function ErrorPage() {
  return (
    <Error />
  );
}
