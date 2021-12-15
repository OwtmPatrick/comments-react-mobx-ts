import * as yup from 'yup';

export default yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	author: yup.string().required('Author is required'),
	text: yup.string().required('Text is required')
});
