import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import "./styles.css";
function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
