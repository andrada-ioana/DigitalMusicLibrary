import React, { useState } from "react";
import { useArtists } from "../../components/ArtistContext";
import "./AddArtistForm.css";
import { v4 as generateUuid } from "uuid";
import { useNavigate } from "react-router-dom";

const AddArtistForm: React.FC = () => {
  const [artistName, setArtistName] = useState("");
  const { addArtist } = useArtists();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const artist = { name: artistName, albums: [], id: generateUuid() };
    addArtist(artist);
    setArtistName("");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="add-artist-container">
      <form onSubmit={handleSubmit} className="add-artist-form">
        <input
          type="text"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          placeholder="Artist Name"
          required
        />
        <div className="buttons-style">
          <button type="submit" className="submit-button">
            Add
          </button>
          <button onClick={handleBack} className="back-button">
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtistForm;
