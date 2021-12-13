import {Instance, types} from 'mobx-state-tree';
import {createContext, useContext} from 'react';
import commentsStore from './Comments';

const RootModel = types.model({
	commentsStore
});

const initialState = RootModel.create({
	commentsStore: {
		comments: [
			{
				id: '1',
				text: 'This is first comment',
				author: 'Diego Lima',
				avatar: 'https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200005/facebook/ti5hffx5qcawk7hrxed5.jpg',
				// two days ago
				date: new Date().setDate(new Date().getDate() - 2),
				rating: 0
			},
			{
				id: '2',
				text: 'This is second comment',
				author: 'Fica Pacianskiy',
				avatar: '',
				// 45 minutes ago
				date: new Date().setMinutes(new Date().getMinutes() - 45),
				rating: 0
			}
		]
	}
});

const RootStoreContext = createContext<null | RootInstance>(null);

export const rootStore = initialState;
export type RootInstance = Instance<typeof RootModel>;
export const {Provider} = RootStoreContext;
export function useMst(): typeof rootStore {
	const store = useContext(RootStoreContext);

	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider');
	}

	return store;
}
