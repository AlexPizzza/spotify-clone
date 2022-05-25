import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { getHashFromUrl } from './spotify/spotify';
import { useStateProviderValue } from './context/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateProviderValue();

	useEffect(() => {
		const hash = getHashFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				payload: _token
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					payload: user
				});
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					payload: playlists
				});
			});

			spotify.getPlaylist('37i9dQZEVXcUPtVjEKQKVB').then((response) => {
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					payload: response
				});
			});
		}
	}, [dispatch]);

	return (
		<div className='app'>
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
