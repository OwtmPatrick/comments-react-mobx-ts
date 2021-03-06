import React from 'react';
import {Stack, Button} from '@mui/material';
import {observer} from 'mobx-react-lite';
import {useMst} from '../../store/models/Root';
import Comment, {ICommentOwnProps} from '../Comment';
import AddComment from '../AddComment';

const CommentsList = observer(() => {
	const [open, setOpen] = React.useState<boolean>(false);

	const handleClickOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	const {
		commentsStore: {comments}
	} = useMst();

	return (
		<Stack spacing={2} alignItems="center" sx={{padding: 5}}>
			<Button variant="contained" onClick={handleClickOpen}>Add comment</Button>

			<AddComment open={open} handleClose={handleClose} />

			{comments.map(({
				id, incrementRating, decrementRating, timeAgo, toggle, ...rest
			}: ICommentOwnProps) => (
				<Comment
					id={id}
					key={id}
					incrementRating={incrementRating}
					decrementRating={decrementRating}
					timeAgo={timeAgo}
					toggle={toggle}
					{...rest}
				/>
			))}
		</Stack>
	);
});

export default CommentsList;
