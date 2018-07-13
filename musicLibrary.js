
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
  constructor(name) {
    this.name = name
    this.tracks = [];
  }
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  }

  overallRating() {
    let rating = 0
    this.tracks.map(function(track) {
      rating += track.rating;
    })
    return rating / this.tracks.length;
  }

  get totalPlaytime() {
    let playTime = 0
    console.log(this.tracks);
    this.tracks.map(function(track) {
      // console.log("track", track)
      // console.log("songLength", track.songLength)
      playTime += track.songLength;
    })
    return playTime
  }
}

class Track {
  constructor(title, rating, songLength) {
    this.title = title;
    this.rating = rating;
    this._songLength = songLength;
  }

  set popularity(theRating) {
    if (theRating <= 5) {
      this.rating = theRating
    }
  }

  get songLength() {
    return this._songLength
  }

}

let myLibrary = new Library("Sweet Playlists", "DJ Coolface");
let myTrack1 = new Track("Fun Times", 5, 300);
let myTrack2 = new Track("Times", 4, 460);
let myTrack3 = new Track("A song", 3, 237);
let myTrack4 = new Track("The Worst", 1, 186);
let myTrack5 = new Track("My Fave", 3, 351);

let myPlaylist1 = new Playlist("Fun Music");
let myPlaylist2 = new Playlist("Sad Music");

myPlaylist1.addTrack(myTrack3);
myPlaylist2.addTrack(myTrack4);
myPlaylist2.addTrack(myTrack1);
myPlaylist2.addTrack(myTrack3);
myLibrary.addPlaylist(myPlaylist1);
myLibrary.addPlaylist(myPlaylist2);

console.log(myPlaylist1);
console.log("playlist 2", myPlaylist2.tracks);
console.log(myLibrary)
console.log(myPlaylist1.overallRating());
console.log("total play time ", myPlaylist2.totalPlaytime)

