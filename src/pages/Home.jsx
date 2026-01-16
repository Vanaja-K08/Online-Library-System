import { Link } from "react-router-dom";

function Home() {
    const categories = [
        "Fiction",
        "Non-Fiction",
        "Sci-Fi",
        "Biography",
        "History",
    ];

    return (

        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="page-title">📚 Welcome to the Online Library</h1>
                <p className="text-muted">
                    Discover books across multiple categories
                </p>
            </div>

            <div className="row">
                {categories.map((category) => (
                    <div key={category} className="col-md-4 mb-3">


                        <div className="card shadow-sm h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">{category}</h5>
                                <Link
                                    to={`/books/${category}`}
                                    className="btn btn-outline-primary mt-3"
                                >
                                    Browse {category}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;