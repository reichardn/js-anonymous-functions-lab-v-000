$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function setMenu(e) {
  $('#menuOptions').html("You can play a song, pause a song, or view all the songs")
}

function menu() {
  $('#menu').on('click', setMenu);
}

function setSong(e) {
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function play() {
  $('#play').on('click', setSong);
}

// -----------------------

function pauseSong(e) {
  $('#songPaused').html(songToPlay + " is paused");
}

function pause() {
  $('#pause').on('click', pauseSong);
}

// -----------------------

function showSong(e) {
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}

function show() {
  $('#show').on('click', showSong);
}
