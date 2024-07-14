import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Artist } from "./types/Artist";

const App: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch("/api/artists")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data); // Assuming the response directly provides an array of artists
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage artists={artists} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
