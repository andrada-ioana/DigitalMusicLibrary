import CustomButton from "../components/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import AlbumCard from "../components/AlbumCard";
import ArtistCard from "../components/ArtistCard";
import { Artist } from "../types/Artist";
import { Album } from "../types/Album";

interface HomePageProps {
  artists: Artist[];
}

const HomePage: React.FC<HomePageProps> = ({ artists }) => {
  const getArtistNameById = (artistId: string): string => {
    const foundArtist = artists.find((artist) => artist.id === artistId);
    return foundArtist ? foundArtist.name : "Unknown Artist";
  };

  const allAlbums: Album[] = artists.flatMap((artist) => artist.albums);

  return (
    <div>
      <div>
        <CustomButton
          label="Artists"
          onClick={() => console.log("Button clicked")}
          className="custom-button"
          iconBack={<IoIosArrowRoundForward size="30" />}
        />
      </div>

      <div className="artists-scroll">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} name={artist.name} />
        ))}
      </div>

      <div>
        <CustomButton
          label="Albums"
          onClick={() => console.log("Button clicked")}
          className="custom-button"
          iconBack={<IoIosArrowRoundForward size="30" />}
        />
      </div>

      <div>
        {allAlbums.map((album: Album) => (
          <AlbumCard
            key={album.id}
            title={album.title}
            artist={getArtistNameById(album.artistID)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
