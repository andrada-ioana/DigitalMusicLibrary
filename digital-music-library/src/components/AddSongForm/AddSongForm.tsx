import React, { useState } from "react";
import { useArtists } from "../../components/ArtistContext";
import { v4 as uuidv4 } from "uuid";
import "./AddSongForm.css";
import { useParams, useNavigate } from "react-router-dom";

const AddSongForm: React.FC = () => {
  const { addSong } = useArtists();
  const [songTitle, setSongTitle] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const { albumId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      songTitle.trim() === "" ||
      minutes.trim() === "" ||
      seconds.trim() === ""
    ) {
      alert("Please fill out all fields");
      return;
    }

    const newSong = {
      id: uuidv4(),
      title: songTitle,
      length: `${minutes}:${seconds}`,
      albumID: albumId || "",
      isFavourite: false,
    };

    addSong(newSong, albumId || "");
    setSongTitle("");
    setMinutes("");
    setSeconds("");
  };

  const handleBack = () => {
    navigate(`/albums/${albumId}`);
  };

  return (
    <div className="add-song-container">
      <form className="add-song-form" onSubmit={handleSubmit}>
        <h2>Add New Song</h2>
        <div className="form-group">
          <label htmlFor="songTitle" className="title-pos">
            Song Title:
          </label>
          <input
            type="text"
            id="songTitle"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Length:</label>
          <div className="length-inputs">
            <input
              type="number"
              id="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              min="0"
              max="59"
              placeholder="Min"
              required
            />
            <span>:</span>
            <input
              type="number"
              id="seconds"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              min="0"
              max="59"
              placeholder="Sec"
              required
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default AddSongForm;
