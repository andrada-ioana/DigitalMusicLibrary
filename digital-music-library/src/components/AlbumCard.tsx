import React from "react";
import defaultImage from "../assets/images/no_image.jpg";
import "./AlbumCard.css";
import CustomButton from "../components/CustomButton";
import { FaPlay } from "react-icons/fa";
import { Album } from "../types/Album";
import { Artist } from "../types/Artist";
import { useNavigate } from "react-router-dom";

interface AlbumCardProps {
  album: Album;
  artists: Artist[];
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album, artists }) => {
  const navigate = useNavigate();

  return (
    <div className="card-style">
      <img src={defaultImage} className="card-img-top" alt="Album Art" />
      <div className="card-body">
        <div className="card-title-artist">
          <h5 className="card-title">{album.title}</h5>
          <h5 className="card-artist">
            {artists.find((artist) => artist.id === album.artistID)?.name ||
              "Unknown Artist"}
          </h5>
        </div>
        <CustomButton
          iconBack={<FaPlay />}
          onClick={() => navigate("/albums/" + album.id)}
          className="play-button"
          label=""
        />
      </div>
    </div>
  );
};

export default AlbumCard;
