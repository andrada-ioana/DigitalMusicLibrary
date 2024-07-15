import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import { ArtistProvider } from "./components/ArtistContext";
import MyLibrary from "./pages/MyLibrary/MyLibrary";
import AddSongForm from "./components/AddSongForm/AddSongForm";

const App: React.FC = () => {
  return (
    <ArtistProvider>
      <Router>
        <div className="app-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/artists/:artistId" element={<ArtistPage />} />
              <Route path="/albums/:albumId" element={<AlbumPage />} />
              <Route path="/my-library" element={<MyLibrary />} />
              <Route path="/add-song/:albumId" element={<AddSongForm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ArtistProvider>
  );
};

export default App;
