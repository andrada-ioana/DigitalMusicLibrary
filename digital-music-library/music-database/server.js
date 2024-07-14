const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

// SQLite database initialization
const dbPath = path.resolve(__dirname, 'music.db');
const db = new sqlite3.Database(dbPath);

// API route to fetch artists with albums and songs
app.get('/api/artists', (req, res) => {
  const query = `
    SELECT 
      artists.id as artistId,
      artists.name as artistName,
      albums.id as albumId,
      albums.title as albumTitle,
      albums.description as albumDescription,
      songs.id as songId,
      songs.title as songTitle,
      songs.length as songLength,
      songs.isFavourite as songIsFavourite
    FROM artists
    LEFT JOIN albums ON artists.id = albums.artistID
    LEFT JOIN songs ON albums.id = songs.albumID
  `;

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Process the rows to structure the data as needed
    const artists = {};

    rows.forEach(row => {
      if (!artists[row.artistId]) {
        artists[row.artistId] = {
          id: row.artistId,
          name: row.artistName,
          albums: []
        };
      }

      const artist = artists[row.artistId];

      if (row.albumId) {
        let album = artist.albums.find(a => a.id === row.albumId);

        if (!album) {
          album = {
            id: row.albumId,
            title: row.albumTitle,
            description: row.albumDescription,
            songs: []
          };
          artist.albums.push(album);
        }

        if (row.songId) {
          let song = album.songs.find(s => s.id === row.songId);

          if (!song) {
            song = {
              id: row.songId,
              title: row.songTitle,
              length: row.songLength,
              isFavourite: row.songIsFavourite
            };
            album.songs.push(song);
          }
        }
      }
    });

    res.json(Object.values(artists));
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
