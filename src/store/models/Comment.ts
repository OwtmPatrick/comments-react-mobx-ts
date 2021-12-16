import {types} from 'mobx-state-tree';

const MINIMUM_RATING_FOR_HIDDEN_COMMENT = -10;

const Comment = types
	.model('Comment', {
		id: types.identifier,
		text: types.string,
		author: types.string,
		avatar: types.string,
		date: types.Date,
		rating: 0,
		hidden: types.boolean
	})
	.views(self => ({
		timeAgo(): string {
			const difference = new Date().getTime() - self.date.getTime();
			const minute = 1000 * 60;
			const hour = 1000 * 60 * 60;
			const day = 1000 * 60 * 60 * 24;

			if (difference < hour) {
				return `${Math.round(difference / minute)} minutes ago`;
			}

			if (difference < day) {
				return `${Math.round(difference / hour)} hours ago`;
			}

			return `${Math.round(difference / day)} days ago`;
		}
	}))
	.actions(self => ({
		incrementRating() {
			self.rating += 1;
		},
		decrementRating() {
			self.rating -= 1;

			if (self.rating < MINIMUM_RATING_FOR_HIDDEN_COMMENT) {
				self.hidden = true;
			}
		},
		toggle() {
			self.hidden = !self.hidden;
		}
	}));

export default Comment;
