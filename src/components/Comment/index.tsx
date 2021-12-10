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
	id: string;
	text: string;
	author: string;
	date: Date;
	rating: number;
}

const Comment = ({text, author, date}: IComment): JSX.Element => (
	<StyledComment>
		<Card>
			<CardHeader
				avatar={(
					<Avatar sx={{bgcolor: blue[700]}} aria-label="avatar">
						R
					</Avatar>
				)}
				title={author}
			/>

			<CardContent>
				<Typography variant="body1" color="text.primary">
					{text}
				</Typography>

				<Typography variant="body2" color="text.secondary">
					{/* {date} */}
				</Typography>
			</CardContent>

			<CardActions disableSpacing>
				<IconButton aria-label="increment rating">
					<AddCircleOutline />
				</IconButton>

				<IconButton aria-label="decrement rating">
					<RemoveCircleOutline />
				</IconButton>

				<Rating label="10" size="medium" />
			</CardActions>
		</Card>
	</StyledComment>
);

export default Comment;
