import { connect } from 'react-redux';
import PlaylistIndex from './PlaylistIndex';
import { fetchPlaylists, makePlaylist } from '../../../../../actions/playlist_actions';

const playlistSelector = (playlists, scenario, user_id, playlistFollowers) => {
  if (scenario === 'library') {
    return Object.values(playlistFollowers)
      .filter(follow => follow.userId === user_id)
      .map(follow => playlists[follow.playlistId])
  } else {
    return Object.keys(playlists).map(id => playlists[id])
  }
}

const mstp = ({entities: {playlists, playlistFollowers}, session: {id}}, ownProps) => ({
  currentUserId: id,
  playlists: playlistSelector(playlists, ownProps.match.params.main || 'library', id, playlistFollowers)
})

const mdtp = dispatch => ({
  fetchPlaylists: (user_id) => dispatch(fetchPlaylists(user_id)),
  makePlaylist: playlist => dispatch(makePlaylist(playlist)),
})

export default connect(mstp, mdtp)(PlaylistIndex);