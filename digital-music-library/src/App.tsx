import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import { Artist } from "./types/Artist";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const App: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    fetch("/api/artists")
      .then((response) => response.json())
      .then((data) => {
        const updatedArtists = data.map((artist: Artist) => {
          const updatedAlbums = artist.albums.map((album) => ({
            ...album,
            artistID: artist.id,
          }));
          return { ...artist, albums: updatedAlbums };
        });
        setArtists(updatedArtists);
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
            {artists.map((artist) =>
              artist.albums.map((album) => (
                <Route
                  key={album.id}
                  path={`/albums/${album.id}`}
                  element={<AlbumPage album={album} artists={artists} />}
                />
              ))
            )}
            {artists.map((artist) => (
              <Route
                key={artist.id}
                path={`/artists/${artist.id}`}
                element={<ArtistPage artist={artist} />}
              />
            ))}

            <Route path="/search" element={<SearchPage artists={artists} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
