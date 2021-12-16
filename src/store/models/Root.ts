import {Instance, types} from 'mobx-state-tree';
import {createContext, useContext} from 'react';
import commentsStore from './Comments';

import getUniqueId from '../../utils/getUniqueId';

const RootModel = types.model({
	commentsStore
});

const initialState = RootModel.create({
	commentsStore: {
		comments: [
			{
				id: getUniqueId(),
				text: 'The trailer contains the worst bit',
				author: 'Diego Lima',
				avatar: 'https://res.cloudinary.com/tinyfac-es/image/upload/w_1024,h_1024,c_fit/v1627200005/facebook/ti5hffx5qcawk7hrxed5.jpg',
				// two days ago
				date: new Date().setDate(new Date().getDate() - 2),
				rating: 0,
				hidden: false
			},
			{
				id: getUniqueId(),
				text: 'Funny and Entertaining Version by Guy Ritchie',
				author: 'Fica Pacianskiy',
				avatar: '',
				// 45 minutes ago
				date: new Date().setMinutes(new Date().getMinutes() - 45),
				rating: 3,
				hidden: false
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
