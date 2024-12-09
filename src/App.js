import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller.",
      posterURL: "https://www.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg",
      rating: 5,
    },
    {
      title: "Stranger Things",
      description: "Supernatural adventures.",
      posterURL: "https://wp-pa.phonandroid.com/uploads/2024/11/brenner-retour-stranger-things-2.jpg",
      rating: 4,
    },
    {
      title: "Breaking Bad",
      description: "A high school chemistry teacher turned methamphetamine kingpin.",
      posterURL: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/breaking_bad_4.png",
      rating: 5,
    },
    {
      title: "The Witcher",
      description: "A monster hunter struggles to find his place in a world.",
      posterURL: "https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg",
      rating: 4,
    },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showModal, setShowModal] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleFilter = (filter) => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
          (filter.rating ? movie.rating >= parseInt(filter.rating) : true)
      )
    );
  };

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies([...movies, newMovie]);
      setFilteredMovies([...movies, newMovie]);
      setShowModal(false);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <Container style={{ padding: "2rem", minHeight: "100vh" }}>
      <h1 className="text-center">MovieHive</h1>
      <div className="search-section">
        <Filter handleFilter={handleFilter} />
        <Button variant="primary" onClick={() => setShowModal(true)} className="mt-3">
          Add Movie
        </Button>
      </div>
      <div className="card-container">
        {filteredMovies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.posterURL} alt={`${movie.title} Poster`} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
              <p className="card-text">Rating: {movie.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.title}
                onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                placeholder="Enter movie title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.description}
                onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                placeholder="Enter movie description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                value={newMovie.posterURL}
                onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
                placeholder="Enter image URL"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="5"
                value={newMovie.rating}
                onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
                placeholder="Enter movie rating (1 to 5)"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
