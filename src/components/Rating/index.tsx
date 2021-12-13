import React from 'react';
import {Chip, ChipProps} from '@mui/material';
import StyledRating from './styles';

interface IProps extends ChipProps {
	rating: number;
}

const getColor = (
	rating: number
): 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' => {
	if (rating < 0) {
		return 'error';
	}

	if (rating > 0) {
		return 'success';
	}

	return 'default';
};

const Rating = ({rating}: IProps): JSX.Element => (
	<StyledRating>
		<Chip label={rating} color={getColor(rating)} />
	</StyledRating>
);

export default Rating;
