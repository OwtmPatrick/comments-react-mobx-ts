import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Provider, rootStore} from './store/models/Root';
import CommentsList from './components/Comments-list';

function App(): JSX.Element {
	return (
		<Provider value={rootStore}>
			<CssBaseline />

			<CommentsList />
		</Provider>
	);
}

export default App;
