import React from "react";
import defaultImage from "../assets/images/no_image.jpg";
import "./AlbumDescription.css";

interface AlbumDescriptionProps {
  title: string;
  artist: string;
  description: string;
  image?: string;
}

const AlbumDescription: React.FC<AlbumDescriptionProps> = ({
  title,
  artist,
  description,
  image,
}) => {
  return (
    <div className="album-description">
      <img src={image || defaultImage} className="album-img" alt="Album Art" />
      <div className="album-description-body">
        <div className="album-title-artist">
          <h5 className="album-title">{title}</h5>
          <h5 className="album-artist">{artist}</h5>
        </div>
        <p className="album-description-text">{description}</p>
      </div>
    </div>
  );
};

export default AlbumDescription;
