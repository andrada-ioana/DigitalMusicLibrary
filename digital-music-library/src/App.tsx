import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import "./App.css";

const App: React.FC = () => {
  // print the sidebar and the content
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/albums" element={<AlbumPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
