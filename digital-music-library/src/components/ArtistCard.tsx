import React from "react";
import defaultImage from "../assets/images/no_image.jpg";
import "./ArtistCard.css";
import { useNavigate } from "react-router-dom";
import { Artist } from "../types/Artist";

interface ArtistCardProps {
  artist: Artist;
  image?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, image }) => {
  const navigate = useNavigate();

  return (
    <button
      className="invisible-button"
      onClick={() => navigate("/artists/" + artist.id)}
    >
      <div className="style-card">
        <img
          src={image || defaultImage}
          className="style-img"
          alt="Artist Art"
        />
        <h5 className="style-title">{artist.name}</h5>
      </div>
    </button>
  );
};

export default ArtistCard;
