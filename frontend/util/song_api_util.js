export const fetchSongs = (playlist_id) => (
  $.ajax({
    method: `GET`,
    url: `/api/songs`,
    data: {playlist_id: playlist_id}
  })
)