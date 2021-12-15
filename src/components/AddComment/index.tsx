import * as React from 'react';
import {
	Stack,
	Button,
	TextField,
	Dialog,
	DialogContent,
	Tooltip,
	IconButton,
	Avatar
} from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import {useFormik} from 'formik';
import validationSchema from './validationSchema';

import getUniqueId from '../../utils/getUniqueId';

import {useMst} from '../../store/models/Root';

interface IAddComment {
	open: boolean;
	handleClose: () => void;
}

const AddComment = ({open, handleClose}: IAddComment): JSX.Element => {
	const {
		commentsStore: {addComment}
	} = useMst();

	const formik = useFormik({
		initialValues: {
			email: '',
			author: '',
			text: '',
			avatar: ''
		},
		validationSchema,
		onSubmit: values => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const {email: string, ...rest} = values;

			addComment({
				...rest,
				id: getUniqueId(),
				date: new Date(),
				rating: 0
			});

			formik.resetForm();
			handleClose();
		}
	});

	const handleCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}

		const file = e.target.files[0];
		const reader = new FileReader();

		reader.readAsDataURL(file);

		reader.onloadend = function () {
			formik.setFieldValue('avatar', reader.result);
		};
	};

	return (
		<Dialog open={open} onClose={handleClose} sx={{'& .MuiDialog-paper': {width: '100%'}}}>
			<form onSubmit={formik.handleSubmit} noValidate>
				<DialogContent>
					<Stack spacing={2}>
						<TextField
							fullWidth
							id="email"
							name="email"
							label="Email"
							type="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>

						<TextField
							fullWidth
							id="author"
							name="author"
							label="Author"
							type="author"
							value={formik.values.author}
							onChange={formik.handleChange}
							error={formik.touched.author && Boolean(formik.errors.author)}
							helperText={formik.touched.author && formik.errors.author}
						/>

						<TextField
							fullWidth
							id="text"
							name="text"
							label="Text"
							value={formik.values.text}
							onChange={formik.handleChange}
							error={formik.touched.text && Boolean(formik.errors.text)}
							helperText={formik.touched.text && formik.errors.text}
							multiline
							rows={5}
						/>

						<input
							accept="image/*"
							id="faceImage"
							type="file"
							onChange={handleCapture}
							hidden
						/>

						<Stack direction="row" justifyContent="space-between">
							<label htmlFor="faceImage">
								<Tooltip title="Select image">
									<IconButton
										color="primary"
										aria-label="upload picture"
										component="span"
										style={{padding: 0}}
									>
										<PhotoCamera fontSize="large" />
									</IconButton>
								</Tooltip>
							</label>

							<Avatar src={formik.values.avatar} />
						</Stack>

						<Button color="primary" variant="contained" fullWidth type="submit">
							Submit
						</Button>
					</Stack>
				</DialogContent>
			</form>
		</Dialog>
	);
};

export default AddComment;
