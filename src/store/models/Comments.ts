import {types} from 'mobx-state-tree';
import Comment from './Comment';

type T = {
	id: string;
	text: string;
	author: string;
	avatar: string;
	date: Date;
	rating: number;
}

const CommentStore = types
	.model('CommentsStore', {
		comments: types.array(Comment)
	})
	.actions(self => ({
		addComment(data: T) {
			self.comments.push(data);
		}
	}));

export default CommentStore;
