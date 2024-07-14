const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./music.db');

const dataPath = path.join(__dirname, 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

db.serialize(() => {
  const insertArtist = db.prepare('INSERT OR IGNORE INTO artists VALUES (?, ?)');
  const insertAlbum = db.prepare('INSERT OR IGNORE INTO albums VALUES (?, ?, ?, ?)');
  const insertSong = db.prepare('INSERT OR IGNORE INTO songs VALUES (?, ?, ?, ?, ?)');

  data.forEach((artist) => {
    const artistID = `artist-${artist.name.replace(/\s+/g, '-').toLowerCase()}`;
    insertArtist.run(artistID, artist.name);

    artist.albums.forEach((album) => {
      const albumID = `album-${album.title.replace(/\s+/g, '-').toLowerCase()}`;
      insertAlbum.run(albumID, album.title, artistID, album.description.trim());

      album.songs.forEach((song) => {
        const songID = `song-${song.title.replace(/\s+/g, '-').toLowerCase()}`;
        insertSong.run(songID, song.title, song.length, 0, albumID);
      });
    });
  });

  insertArtist.finalize();
  insertAlbum.finalize();
  insertSong.finalize();
});

db.close();
