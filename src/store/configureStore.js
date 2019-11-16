import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers/rootReducer';

let store;
export default initialState => {
    if (store) { 
        return store;
    }

    const persistConfig = {
        key: 'root',
        storage: storage,
        stateReconciler: autoMergeLevel2 
    };
    const pReducer = persistReducer(persistConfig, rootReducer);
    
    const createdStore = createStore(
        pReducer, 
        initialState, 
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension()
        )
    );
    store = createdStore;

    return store;
}

