import React, { useState } from "react";
import defaultImage from "../../assets/images/no_image.jpg";
import "./AlbumDescription.css";
import CustomButton from "../CustomButton";
import { FaEdit, FaCheck, FaTrash } from "react-icons/fa";
import { useArtists } from "../../components/ArtistContext";
import { useParams, useNavigate } from "react-router-dom";
import { Album } from "../../types/Album";

interface AlbumDescriptionProps {
  title: string;
  artist: string;
  description: string;
  image?: string;
  album: Album;
}

const AlbumDescription: React.FC<AlbumDescriptionProps> = ({
  title,
  artist,
  description: initialDescription,
  image,
  album,
}) => {
  const [description, setDescription] = useState(initialDescription);
  const [isEditing, setIsEditing] = useState(false);
  const { updateAlbumDescription, deleteAlbum } = useArtists();
  const { albumId } = useParams();
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleUpdateDescription = () => {
    const newAlbum = {
      id: album?.id || "",
      title: album?.title || title,
      artistID: album?.artistID || "",
      description: description,
      songs: album?.songs || [],
    };
    updateAlbumDescription(albumId || "", newAlbum);
    setIsEditing(false);
  };

  const handleDeleteAlbum = () => {
    deleteAlbum(albumId || "");
    navigate("/"); // Redirect to home or appropriate page after deletion
  };

  return (
    <div className="album-description">
      <img src={image || defaultImage} className="album-img" alt="Album Art" />
      <div className="album-description-body">
        <div className="album-title-artist">
          <h5 className="album-title">{title}</h5>
          <h5 className="album-artist">{artist}</h5>
        </div>
        {isEditing ? (
          <form className="description-form" onSubmit={handleUpdateDescription}>
            <textarea
              className="description-textarea"
              value={description}
              onChange={handleDescriptionChange}
              rows={4}
              placeholder="Enter album description..."
            />
            <div className="form-buttons">
              <CustomButton
                iconBack={<FaCheck size={20} />}
                label=""
                onClick={handleUpdateDescription}
                className="custom-button"
              />
            </div>
          </form>
        ) : (
          <div className="album-description-text">
            {description}
            <br />
            <CustomButton
              iconBack={<FaEdit size={15} />}
              label=""
              onClick={handleEditToggle}
              className="custom-button"
            />
            <CustomButton
              iconBack={<FaTrash size={15} />}
              label=""
              onClick={handleDeleteAlbum}
              className="custom-button"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumDescription;
