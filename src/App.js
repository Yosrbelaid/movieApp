import React, { useState } from "react";
import ReactStars from "react-stars";
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
      posterURL: "https://www.ecranlarge.com/content/uploads/2023/08/49wjfen0moxb9ipfgn8aiqmgskd-611.jpg",
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
    {
      title: "One Piece ",
      description: "The epic adventures of Monkey D. Luffy and his crew as they search for the legendary One Piece treasure.",
      posterURL: "https://www.yourdecoration.be/cdn/shop/files/Poster-One-Piece-Netflix-Straw-Hat-Pirates-61x91.5cm-Grupo-Erik-GPE5777_062fdd77-ca3d-47de-b0df-122b85ab94c0.jpg?v=1721044737",
      rating: 5,
    },
    {
      title: "Wednesday",
      description: "Follow Wednesday Addams' journey at Nevermore Academy.",
      posterURL: "https://miro.medium.com/v2/resize:fit:1000/1*URQlzzR5MHI9Lkm63wrduw.jpeg",
      rating: 4,
    },
    {
      title: "Dune",
      description: "A young nobleman faces challenges on a desert planet.",
      posterURL: "https://storage.googleapis.com/pod_public/1300/216439.jpg",
      rating: 5,
    },
    {
      title: "The Boys",
      description: "A dark and gritty take on superhero culture.",
      posterURL: "https://media.gqmagazine.fr/photos/65d85c58c6b4b2776b3b47d0/4:3/w_2024,h_1518,c_limit/The%20Boys%20saison%204.png",
      rating: 5,
    },
    {
      title: "The Last of Us",
      description: "Survivors navigate a post-apocalyptic world filled with danger.",
      posterURL: "https://www.metalopolis.net/files/Articles/Big/2023/thumbb_9839_06543950-e2af-4a32-8982-27f5e8666f2b.jpg",
      rating: 5,
    },
    {
      title: "The Umbrella Academy",
      description: "A dysfunctional superhero family reunites to save the world.",
      posterURL: "https://resize.elle.fr/portrait/var/plain_site/storage/images/loisirs/series/the-umbrella-academy-quelle-date-pour-la-diffusion-de-la-saison-2-sur-netflix-3773955/90192822-1-fre-FR/The-Umbrella-Academy-quelle-date-pour-la-diffusion-de-la-saison-2-sur-Netflix.jpg",
      rating: 4,
    },
    {
      title: "Arcane",
      description: "The origins of two iconic League of Legends champions.",
      posterURL: "https://gagadget.com/media/uploads/arcane_UluzYQV.jpg",
      rating: 5,
    },
    {
      title: "Peaky Blinders",
      description: "A crime family in post-WWI Birmingham.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
    },
    {
      title: "Avatar: The Way of Water",
      description: "The next chapter in the saga of Pandora.",
      posterURL: "https://m.media-amazon.com/images/S/pv-target-images/f0535dd61f56bddd6ee7f3bfb765645e45d78f373418ae37ee5103cf6eebbff0.jpg",
      rating: 4,
    },
    {
      title: "Squid Game",
      description: "Survival thriller where contestants compete in deadly games.",
      posterURL: "https://www.orientaserie.it/wp-content/uploads/2022/09/FCKdHXVXEAsaylL.jpg",
      rating: 5,
    },

    {
      title: "The Mandalorian",
      description: "A bounty hunter navigates the Star Wars galaxy.",
      posterURL: "https://www.ecranlarge.com/content/uploads/2022/09/swgbv7lv2proqgkxwlibdgxkz1s-680.jpg",
      rating: 5,
    },
    {
      title: "Shrek",
      description: "A hilarious adventure in a fairy-tale world.",
      posterURL: "https://m.media-amazon.com/images/S/pv-target-images/a87ca2b4182bd152604d7f53b53abb753087c9a76d337e2d9c0cd6d874198d83.jpg",
      rating: 5,
    },
    {
      title: "Spider-Man: No Way Home",
      description: "Spider-Man deals with multiversal threats.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A journey beyond the stars to save humanity.",
      posterURL: "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
      rating: 5,
    },
    {
      title: "Game of Thrones",
      description: "Noble families vie for control of the Iron Throne.",
      posterURL: "https://static.hbo.com/game-of-thrones-1-1920x1080.jpg",
      rating: 4,
    },
    {
      title: "Chernobyl",
      description: "A dramatization of the 1986 Chernobyl disaster.",
      posterURL: "https://www.justwatch.com/images/poster/301213916/s718/chernobyl.jpg",
      rating: 5,
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
              <ReactStars
                count={5}
                value={movie.rating}
                size={24}
                color2={"#ffd700"}
                edit={false}
              />
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

