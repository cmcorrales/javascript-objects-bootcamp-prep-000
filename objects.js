var playlist = {
  artist : 'song'
}

function updatePlaylist(playlist, artistName, songTitle) {
    return Object.assign({}, playlist, {
      [artistName] : songTitle
    })
}

updatePlaylist(playlist)

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}