import React from "react";
import { Song } from "../../types/Song";
import "./MyLibrary.css";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useArtists } from "../../components/ArtistContext";
import CustomButton from "../../components/CustomButton";
import noItemFound from "../../assets/images/no_image_found.png";
import DOMPurify from "dompurify";

const MyLibrary: React.FC = () => {
  const { artists, updateSongFavouriteStatus } = useArtists();

  const toggleFavourite = (id: string) => {
    updateSongFavouriteStatus(id);
  };

  const songs: Song[] = artists
    .flatMap((artist) => artist.albums.flatMap((album) => album.songs))
    .filter((song) => song.isFavourite);

  return (
    <>
      {songs.length === 0 ? (
        <div className="empty-container">
          <img src={noItemFound} alt="No items found" className="img-style" />
        </div>
      ) : (
        <ul className="list-group">
          {songs.map((song) => (
            <li key={song.id} className="list-group-item">
              <div className="list-element">
                <div
                  className="song-title"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(song.title),
                  }}
                />
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
      )}
    </>
  );
};

export default MyLibrary;
