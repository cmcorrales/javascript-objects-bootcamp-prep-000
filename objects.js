var playlist = {
  artist : 'song'
}

function updatePlaylist(playlist, aristName, songTitle) {
    return Object.assign({}, playlist, {
      [artistName] : songTitle
    })
}

updatePlaylist(playlist)