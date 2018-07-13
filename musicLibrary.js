
class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist (newPlaylist) {
    this.playlists.push(newPlaylist);
  }
}

class Playlist {
  constructor(tracks) {
    this.tracks = [];
  }
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const myLibrary = new Library("Sweet Playlists", "DJ Coolface");
const myTrack = new Track("Fun Times", "10", "3:33");
const myPlaylist = new Playlist(myTrack);


myPlaylist.addTrack(myTrack);
console.log(myPlaylist);
myLibrary.addPlaylist(myPlaylist);
console.log(myLibrary)