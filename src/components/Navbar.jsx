import { Link } from "react-router-dom";

function Navbar() {
  return (


    <nav className='navbar navbar-dark bg-dark px-4'>
      <Link className="navbar-brand" to="/"><b>Library</b></Link>
      <ul className='flex'>
        <div className='mx-4 flex py-2'>
          <Link className="nav-link d-inline text-white" to="/"><b>Home</b></Link>
        </div>
        <div className='mx-4 flex py-2'>
          <Link className="nav-link d-inline text-white" to="/books/Fiction"><b>Browse Books</b></Link>
        </div>
        <div className='mx-4 flex py-2'>
          <Link className="nav-link d-inline text-white" to="/add-book"><b>Add Book</b></Link>
        </div>

      </ul>
    </nav>
  );
}

export default Navbar;
