import React from "react";
import CustomButton from "../../components/CustomButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./ArtistPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Album } from "../../types/Album";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import { useArtists } from "../../components/ArtistContext";
import { IoTrashOutline } from "react-icons/io5";

const ArtistPage: React.FC = () => {
  const navigate = useNavigate();
  const { artistId } = useParams();
  const { artists, deleteArtist } = useArtists();
  const artist = artists.find((artist) => artist.id === artistId);

  if (!artist) {
    return <div>Artist not found</div>;
  }

  const handleDeleteArtist = () => {
    deleteArtist(artistId || "");
    navigate("/");
  };

  return (
    <div>
      <CustomButton
        iconFront={<IoIosArrowRoundBack size="30" />}
        onClick={() => navigate("/")}
        className="custom-button"
        label=""
      />
      <div className="artist-header">
        <div className="artist-name">{artist.name}</div>
        <CustomButton
          iconFront={<IoTrashOutline size="25" />}
          onClick={handleDeleteArtist}
          className="custom-button"
          label=""
        />
      </div>
      <div>
        {artist.albums.map((album: Album) => (
          <AlbumCard key={album.id} album={album} artists={[artist]} />
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
