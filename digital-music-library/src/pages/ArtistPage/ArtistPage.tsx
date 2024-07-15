import CustomButton from "../../components/CustomButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./ArtistPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Album } from "../../types/Album";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import { useArtists } from "../../components/ArtistContext";

const AlbumPage: React.FC = () => {
  const navigate = useNavigate();
  const { artistId } = useParams();
  const { artists } = useArtists();
  const artist = artists.find((artist) => artist.id === artistId);
  if (!artist) {
    return <div>Artist not found</div>;
  }
  return (
    <div>
      <CustomButton
        iconFront={<IoIosArrowRoundBack size="30" />}
        onClick={() => navigate("/")}
        className="custom-button"
        label=""
      />
      <div className="artist-name">{artist.name}</div>
      <div>
        {artist.albums.map((album: Album) => (
          <AlbumCard key={album.id} album={album} artists={[artist]} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
