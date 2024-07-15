import React from "react";
import { Song } from "../../types/Song";
import "./SongsList.css";
import CustomButton from ".././CustomButton";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useArtists } from "../ArtistContext";

interface SongsListProps {
  songs: Song[];
}

const SongsList: React.FC<SongsListProps> = ({ songs }) => {
  const { updateSongFavouriteStatus } = useArtists();
  const toggleFavourite = (id: string) => {
    updateSongFavouriteStatus(id);
  };

  return (
    <>
      {songs.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.id} className="list-group-item">
            <div className="list-element">
              <div className="song-title">{song.title}</div>
              <div className="fav-length">
                <CustomButton
                  label=""
                  iconFront={
                    song.isFavourite ? (
                      <FaHeart size={17} />
                    ) : (
                      <FaRegHeart size={17} />
                    )
                  }
                  onClick={() => toggleFavourite(song.id)}
                  className="custom-button"
                />
                <div className="song-length">{song.length}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SongsList;
