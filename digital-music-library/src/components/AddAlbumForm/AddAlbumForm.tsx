import React, { useState } from "react";
import { useArtists } from "../../components/ArtistContext";
import { v4 as generateUuid } from "uuid";
import { useNavigate } from "react-router-dom";
import "./AddAlbumForm.css";

const AddAlbumForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [artistID, setArtistID] = useState("");
  const [description, setDescription] = useState("");
  const { artists, addAlbum } = useArtists();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAlbum = {
      id: generateUuid(),
      title,
      artistID,
      description,
      songs: [],
    };
    addAlbum(newAlbum, artistID);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="add-album-form">
      <h2 className="title-style">Add Album</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album Title"
        required
      />
      <select
        value={artistID}
        onChange={(e) => setArtistID(e.target.value)}
        required
      >
        <option value="">Select Artist</option>
        {artists.map((artist) => (
          <option key={artist.id} value={artist.id}>
            {artist.name}
          </option>
        ))}
      </select>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Album Description"
        rows={4}
        required
      />
      <div className="buttons-style">
        <button type="submit">Add</button>
        <button onClick={() => navigate("/")} className="back-button">
          Back
        </button>
      </div>
    </form>
  );
};

export default AddAlbumForm;
