import React, { useState, useEffect } from "react";
import { Artist } from "../../types/Artist";
import { Album } from "../../types/Album";
import "./Autocomplete.css";

interface AutocompleteProps {
  artists: Artist[];
  setFilteredArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
  setFilteredAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  artists,
  setFilteredArtists,
  setFilteredAlbums,
}) => {
  const [query, setQuery] = useState("");

  const allAlbums: Album[] = artists.flatMap((artist) => artist.albums);

  useEffect(() => {
    if (query.length >= 2) {
      const matchedArtists: Artist[] = [];
      const matchedAlbums: Album[] = [];

      artists.forEach((artist) => {
        if (artist.name.toLowerCase().includes(query.toLowerCase())) {
          matchedArtists.push(artist);
        }

        artist.albums.forEach((album) => {
          if (
            album.title.toLowerCase().includes(query.toLowerCase()) ||
            album.description.toLowerCase().includes(query.toLowerCase()) ||
            album.songs.some((song) =>
              song.title.toLowerCase().includes(query.toLowerCase())
            )
          ) {
            matchedAlbums.push(album);
          }
        });
      });

      setFilteredArtists(matchedArtists);
      setFilteredAlbums(matchedAlbums);
    } else {
      setFilteredArtists(artists);
      setFilteredAlbums(allAlbums);
    }
  }, [query, artists, setFilteredArtists, setFilteredAlbums]);

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for artists, albums, or songs..."
        className="autocomplete-input"
      />
    </div>
  );
};

export default Autocomplete;
