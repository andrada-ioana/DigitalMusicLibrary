import CustomButton from "../../components/CustomButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./ArtistPage.css";
import { Artist } from "../../types/Artist";
import { useNavigate } from "react-router-dom";
import { Album } from "../../types/Album";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

interface AlbumPageProps {
  artist: Artist;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ artist }) => {
  const navigate = useNavigate();

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
