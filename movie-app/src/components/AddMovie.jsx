import { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovie = () => {
  const { addMovie } = useContext(MovieContext);
  const [showForm, setShowForm] = useState(false); // Controls form visibility
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ id: Date.now(), title, year, image, description });
    setTitle("");
    setYear("");
    setImage("");
    setDescription("");
    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="add-movie-container">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Movie"}
      </button>

      {/* Movie Form (Hidden by Default) */}
      {showForm && (
        <form className="movie-form" onSubmit={handleSubmit}>
          <h2>Add a New Movie</h2>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
          <button type="submit" className="submit-button">Add Movie</button>
        </form>
      )}
    </div>
  );
};

export default AddMovie;
