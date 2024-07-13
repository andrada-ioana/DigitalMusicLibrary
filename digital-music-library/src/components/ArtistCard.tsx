import React from "react";
import defaultImage from "../assets/images/no_image.jpg";
import "./ArtistCard.css";

interface ArtistCardProps {
  name: string;
  image?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, image }) => {
  return (
    <div className="style-card">
      <img src={image || defaultImage} className="style-img" alt="Artist Art" />
      <h5 className="style-title">{name}</h5>
    </div>
  );
};

export default ArtistCard;
