import React from 'react';
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardActions,
	Typography,
	IconButton
} from '@mui/material';
import {blue} from '@mui/material/colors';
import {AddCircleOutline, RemoveCircleOutline} from '@mui/icons-material';
import Rating from '../Rating';
import StyledComment from './styles';

export interface IComment {
	id?: string;
	text: string;
	author: string;
	avatar: string;
	date: Date;
	rating: number;
	incrementRating: () => void;
	decrementRating: () => void;
	timeAgo: () => string;
}

const Comment = ({
	text,
	author,
	rating,
	avatar,
	incrementRating,
	decrementRating,
	timeAgo
}: IComment): JSX.Element => (
	<StyledComment>
		<Card>
			<CardHeader
				avatar={(
					<Avatar sx={{bgcolor: blue[700]}} aria-label="avatar" src={avatar}>
						{avatar || author[0]}
					</Avatar>
				)}
				title={author}
			/>

			<CardContent>
				<Typography variant="body1" color="text.primary">
					{text}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					{timeAgo()}
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label="increment rating" onClick={incrementRating}>
					<AddCircleOutline />
				</IconButton>

				<IconButton aria-label="decrement rating" onClick={decrementRating}>
					<RemoveCircleOutline />
				</IconButton>

				<Rating rating={rating} size="medium" />
			</CardActions>
		</Card>
	</StyledComment>
);

export default Comment;
