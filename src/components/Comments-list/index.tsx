import React from 'react';
import {Stack, Button} from '@mui/material';
// import {getSnapshot} from 'mobx-state-tree';
import {observer} from 'mobx-react-lite';
import {useMst} from '../../store/models/Root';
import Comment, {IComment} from '../Comment';

const CommentsList = observer(() => {
	const {
		commentsStore: {comments}
	} = useMst();

	return (
		<Stack spacing={2} alignItems="center">
			<Button variant="contained">Add comment</Button>

			{comments.map((comment: IComment) => (
				<Comment key={comment.id} {...comment} />
			))}
		</Stack>
	);
});

export default CommentsList;
