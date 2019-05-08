json.set! playlist.id do
  json.extract! playlist, :id, :title, :user_id
  if playlist.cover.attached?
    json.coverUrl url_for(playlist.cover)
  else
    json.coverUrl asset_path('default_playlist_cover.png')
  end
  json.creator playlist.creator.username
  json.length playlist.songs.length
end