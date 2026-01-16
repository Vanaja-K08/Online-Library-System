import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Validation
    if (Object.values(formData).some((value) => value.trim() === "")) {
      setError("All fields are required");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    // 🔁 Redux state update
    dispatch(addBook(newBook));

    // 🔀 Redirect to Browse Books page
    navigate(`/books/${formData.category}`);
  };

  return (
    <div className="container mt-4">
      <h2>Add New Book</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="category"
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Sci-Fi</option>
          <option>Biography</option>
          <option>History</option>
        </select>

        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          onChange={handleChange}
        />

        <button className="btn btn-success">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
