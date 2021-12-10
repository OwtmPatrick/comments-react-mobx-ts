import {types} from 'mobx-state-tree';
import Comment from './Comment';

const CommentStore = types.model('CommentsStore', {
	comments: types.array(Comment)
});

export default CommentStore;
