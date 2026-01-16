import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === Number(id))
  );

  if (!book) return <p>Book not found</p>;

  return (
    <div className="container mt-4">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p>⭐ Rating: {book.rating}</p>

      <Link to={`/books/${book.category}`} className="btn btn-secondary">
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;
