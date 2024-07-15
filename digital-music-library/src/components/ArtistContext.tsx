import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Artist } from "../types/Artist";

interface ArtistContextType {
  artists: Artist[];
  setArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
  updateSongFavouriteStatus: (songId: string) => void;
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const useArtists = () => {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error("useArtists must be used within an ArtistProvider");
  }
  return context;
};

interface ArtistProviderProps {
  children: ReactNode;
}

export const ArtistProvider: React.FC<ArtistProviderProps> = ({ children }) => {
  const [artists, setArtists] = useState<Artist[]>([]);

  const updateSongFavouriteStatus = (songId: string) => {
    const updatedArtists = artists.map((artist) => ({
      ...artist,
      albums: artist.albums.map((album) => ({
        ...album,
        songs: album.songs.map((song) =>
          song.id === songId
            ? { ...song, isFavourite: !song.isFavourite }
            : song
        ),
      })),
    }));
    setArtists(updatedArtists);
  };

  useEffect(() => {
    const storedArtists = localStorage.getItem("artists");
    if (storedArtists) {
      setArtists(JSON.parse(storedArtists));
    } else {
      fetch("/api/artists")
        .then((response) => response.json())
        .then((data) => {
          const updatedArtists = data.map((artist: Artist) => {
            const updatedAlbums = artist.albums.map((album) => ({
              ...album,
              artistID: artist.id,
            }));
            return { ...artist, albums: updatedAlbums };
          });
          setArtists(updatedArtists);
          localStorage.setItem("artists", JSON.stringify(updatedArtists));
        })
        .catch((error) => console.error("Error fetching data: ", error));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("artists", JSON.stringify(artists));
  }, [artists]);

  return (
    <ArtistContext.Provider
      value={{ artists, setArtists, updateSongFavouriteStatus }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
