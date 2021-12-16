import {types} from 'mobx-state-tree';
import Comment from './Comment';

import IComment from '../../interfaces/Comment';

const CommentStore = types
	.model('CommentsStore', {
		comments: types.array(Comment)
	})
	.actions(self => ({
		addComment(data: IComment) {
			self.comments.push(data);
		}
	}));

export default CommentStore;
