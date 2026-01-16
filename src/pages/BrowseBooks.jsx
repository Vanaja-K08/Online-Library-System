import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.category === category &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container mt-4">
      <h2>{category} Books</h2>

     

      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book.id} className="col-md-4">
            <div className="card p-3 mb-3">
              <h5>{book.title}</h5>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`} className="btn btn-info">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
