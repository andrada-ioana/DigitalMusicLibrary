import CustomButton from "../../components/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { Album } from "../../types/Album";
import "./HomePage.css";
import { useArtists } from "../../components/ArtistContext";

const HomePage: React.FC = () => {
  const { artists } = useArtists();
  const allAlbums: Album[] = artists.flatMap((artist) => artist.albums);

  return (
    <div>
      <div className="artists-section">
        <div>
          <CustomButton
            label="Add Artist"
            onClick={() => console.log("Button clicked")}
            className="custom-button"
            iconBack={<IoIosArrowRoundForward size="30" />}
          />
        </div>

        <div className="artists-scroll">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
      <div className="albums-section">
        <div>
          <CustomButton
            label="Add Album"
            onClick={() => console.log("Button clicked")}
            className="custom-button"
            iconBack={<IoIosArrowRoundForward size="30" />}
          />
        </div>

        <div className="albums-scroll">
          {allAlbums.map((album: Album) => (
            <AlbumCard key={album.id} album={album} artists={artists} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
