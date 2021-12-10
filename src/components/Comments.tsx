import {getSnapshot} from 'mobx-state-tree';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {useMst} from '../store/models/Root';

const Counter = observer(() => {
	const {
		commentsStore: {comments}
	} = useMst();

	console.log(getSnapshot(comments));

	return (
		<div>
			{comments.map(({id, text}) => (
				<div key={id}>{text}</div>
			))}
		</div>
	);
});

export default Counter;
