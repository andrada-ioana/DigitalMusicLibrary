import React from "react";
import defaultImage from "../assets/images/no_image.jpg";
import "./AlbumCard.css";
import CustomButton from "../components/CustomButton";
import { FaPlay } from "react-icons/fa";

interface AlbumCardProps {
  title: string;
  artist: string;
  image?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, artist, image }) => {
  return (
    <div className="card-style">
      <img
        src={image || defaultImage}
        className="card-img-top"
        alt="Album Art"
      />
      <div className="card-body">
        <div className="card-title-artist">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-artist">{artist}</h5>
        </div>
        <CustomButton
          iconBack={<FaPlay />}
          onClick={() => console.log("Button clicked")}
          className="play-button"
          label=""
        />
      </div>
    </div>
  );
};

export default AlbumCard;
