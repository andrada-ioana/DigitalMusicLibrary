import AlbumDescription from "../../components/AlbumDescription/AlbumDescription";
import CustomButton from "../../components/CustomButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongsList from "../../components/SongsList/SongsList";
import "./AlbumPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useArtists } from "../../components/ArtistContext";

const AlbumPage: React.FC = () => {
  const navigate = useNavigate();
  const { albumId } = useParams();
  const { artists } = useArtists();
  const album = artists
    .flatMap((artist) => artist.albums)
    .find((album) => album.id === albumId);
  if (!album) {
    return <div>Album not found</div>;
  }
  return (
    <div>
      <CustomButton
        iconFront={<IoIosArrowRoundBack size="30" />}
        onClick={() => navigate("/artists/" + album.artistID)}
        className="custom-button"
        label=""
      />
      <div className="album-content">
        <div className="album">
          <AlbumDescription
            title={album.title}
            artist={
              artists.find((artist) => artist.id === album.artistID)?.name ||
              "Unknown Artist"
            }
            description={album.description}
          />
        </div>
        <SongsList songs={album.songs} />
      </div>
    </div>
  );
};

export default AlbumPage;
