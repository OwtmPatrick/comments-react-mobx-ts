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
		incrementRating() {
			self.rating += 1;
		},
		decrementRating() {
			self.rating -= 1;
		}
	}));

export default Comment;
