import React from 'react';
import {Provider, rootStore} from './store/models/Root';
import CommentsList from './components/Comments-list';

function App(): JSX.Element {
	return (
		<Provider value={rootStore}>
			<div className="App">
				<CommentsList />
			</div>
		</Provider>
	);
}

export default App;
