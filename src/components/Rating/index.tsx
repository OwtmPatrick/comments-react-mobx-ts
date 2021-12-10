import React from 'react';
import {styled} from '@mui/material/styles';
import {Chip, ChipProps} from '@mui/material';

const Rating = styled((props: ChipProps) => <Chip {...props} />)(() => ({
	marginLeft: 'auto'
}));

export default Rating;
