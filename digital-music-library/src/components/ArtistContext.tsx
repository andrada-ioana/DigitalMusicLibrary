import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Artist } from "../types/Artist";
import { Album } from "../types/Album";
import { Song } from "../types/Song";

interface ArtistContextType {
  artists: Artist[];
  setArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
  updateSongFavouriteStatus: (songId: string) => void;
  addArtist: (newArtist: Artist) => void;
  addAlbum: (newAlbum: Album, artistID: string) => void;
  addSong: (newSong: Song, albumID: string) => void;
  deleteArtist: (artistID: string) => void;
  deleteAlbum: (albumID: string) => void;
  deleteSong: (songID: string) => void;
  updateAlbumDescription: (albumID: string, updatedAlbum: Album) => void;
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

  const addArtist = (newArtist: Artist) => {
    const updatedArtists = [...artists, newArtist];
    setArtists(updatedArtists);
  };

  const addAlbum = (newAlbum: Album, artistID: string) => {
    const updatedArtists = artists.map((artist) =>
      artist.id === artistID
        ? { ...artist, albums: [...artist.albums, newAlbum] }
        : artist
    );
    setArtists(updatedArtists);
  };

  const addSong = (newSong: Song, albumID: string) => {
    const updatedArtists = artists.map((artist) => ({
      ...artist,
      albums: artist.albums.map((album) =>
        album.id === albumID
          ? { ...album, songs: [...album.songs, newSong] }
          : album
      ),
    }));
    setArtists(updatedArtists);
  };

  const deleteArtist = (artistID: string) => {
    const updatedArtists = artists.filter((artist) => artist.id !== artistID);
    setArtists(updatedArtists);
  };

  const deleteAlbum = (albumID: string) => {
    const updatedArtists = artists.map((artist) => ({
      ...artist,
      albums: artist.albums.filter((album) => album.id !== albumID),
    }));
    setArtists(updatedArtists);
  };

  const deleteSong = (songID: string) => {
    const updatedArtists = artists.map((artist) => ({
      ...artist,
      albums: artist.albums.map((album) => ({
        ...album,
        songs: album.songs.filter((song) => song.id !== songID),
      })),
    }));
    setArtists(updatedArtists);
  };

  const updateAlbumDescription = (albumID: string, updatedAlbum: Album) => {
    const updatedArtists = artists.map((artist) => ({
      ...artist,
      albums: artist.albums.map((album) =>
        album.id === albumID ? updatedAlbum : album
      ),
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
      value={{
        artists,
        setArtists,
        updateSongFavouriteStatus,
        addArtist,
        addAlbum,
        addSong,
        deleteArtist,
        deleteAlbum,
        deleteSong,
        updateAlbumDescription,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
