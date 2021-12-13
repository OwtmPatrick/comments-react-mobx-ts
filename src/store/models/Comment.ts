import {types} from 'mobx-state-tree';

const Comment = types
	.model('Comment', {
		id: types.identifier,
		text: types.string,
		author: types.string,
		date: types.Date,
		rating: 0
	})
	.views(self => ({
		timeAgo(): string {
			const difference = new Date().getTime() - self.date.getTime();
			const minute = 1000 * 60;
			const hour = 1000 * 60 * 60;
			const day = 1000 * 60 * 60 * 24;

			if (difference < hour) {
				return `${Math.ceil(difference / minute)} minutes ago`;
			}

			if (difference < day) {
				return `${Math.ceil(difference / hour)} hours ago`;
			}

			return `${Math.ceil(difference / day)} days ago`;
		}
	}))
	.actions(self => ({
		incrementRating() {
			self.rating += 1;
		},
		decrementRating() {
			self.rating -= 1;
		}
	}));

export default Comment;
