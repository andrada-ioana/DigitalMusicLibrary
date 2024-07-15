import AlbumDescription from "../components/AlbumDescription";
import CustomButton from "../components/CustomButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import SongsList from "../components/SongsList";
import "./AlbumPage.css";
import { Album } from "../types/Album";
import { Artist } from "../types/Artist";
import { useNavigate } from "react-router-dom";

interface AlbumPageProps {
  album: Album;
  artists: Artist[];
}

const AlbumPage: React.FC<AlbumPageProps> = ({ album, artists }) => {
  const navigate = useNavigate();

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
