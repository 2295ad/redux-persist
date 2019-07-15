import { applyMiddleware,createStore } from "redux";
import reducers from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
   
const pReducer = persistReducer(persistConfig, reducers);


// let store = createStore(reducers,applyMiddleware());
// export default store

export const store = createStore(pReducer);
export const persistor = persistStore(store);


