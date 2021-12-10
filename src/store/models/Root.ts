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
				date: new Date(),
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
