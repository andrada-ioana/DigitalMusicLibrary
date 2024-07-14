const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./music.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS artists (id TEXT PRIMARY KEY, name TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS albums (id TEXT PRIMARY KEY, title TEXT, artistID TEXT, description TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS songs (id TEXT PRIMARY KEY, title TEXT, length TEXT, isFavourite BOOLEAN, albumID TEXT)');
});

db.close();
