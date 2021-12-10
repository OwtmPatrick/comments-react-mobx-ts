import React from 'react';
import {Provider, rootStore} from './store/models/Root';
import Comments from './components/Comments';

function App(): JSX.Element {
	return (
		<Provider value={rootStore}>
			<div className="App">
				<Comments />
			</div>
		</Provider>
	);
}

export default App;
