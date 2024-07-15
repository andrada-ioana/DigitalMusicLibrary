import React, { useState } from "react";
import { Artist } from "../../types/Artist";
import { Album } from "../../types/Album";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import "./SearchPage.css";
import CustomButton from "../../components/CustomButton";
import { IoIosArrowRoundForward } from "react-icons/io";

interface SearchPageProps {
  artists: Artist[];
}

const SearchPage: React.FC<SearchPageProps> = ({ artists }) => {
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([]);

  return (
    <div className="search-page">
      <div className="search-bar">
        <Autocomplete
          artists={artists}
          setFilteredArtists={setFilteredArtists}
          setFilteredAlbums={setFilteredAlbums}
        />
      </div>
      <div>
        <div className="artists-section">
          <div>
            <CustomButton
              label="Artists"
              onClick={() => console.log("Button clicked")}
              className="custom-button"
              iconBack={<IoIosArrowRoundForward size="30" />}
              disabled={true}
            />
          </div>
          <div className="artists-result">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
        <div>
          <div>
            <CustomButton
              label="Albums"
              onClick={() => console.log("Button clicked")}
              className="custom-button"
              iconBack={<IoIosArrowRoundForward size="30" />}
              disabled={true}
            />
          </div>
          <div>
            {filteredAlbums.map((album) => (
              <AlbumCard key={album.id} album={album} artists={artists} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
