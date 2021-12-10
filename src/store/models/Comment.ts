import {types} from 'mobx-state-tree';

const Comment = types
	.model('Comment', {
		id: types.identifier,
		text: types.string,
		author: types.string,
		date: types.Date,
		rating: 0
	})
	.actions(self => ({
		setRating(rating: number) {
			self.rating = rating;
		}
	}));

export default Comment;
