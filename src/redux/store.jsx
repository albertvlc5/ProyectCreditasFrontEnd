import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import products from './reducers/products';
import token from './reducers/token';
import user from './reducers/user';
import id from './reducers/id';
import purchase from './reducers/purchase';
import relateditems from './reducers/relateditems';
import lastpurchase from './reducers/lastpurchase';
import oneproduct from './reducers/oneproduct';
import allpurchases from './reducers/allpurchases';
import control from './reducers/control';

const reducer = combineReducers({
    products,
    token,
    user,
    id,
    oneproduct,
    purchase,
    lastpurchase,
    relateditems,
    allpurchases,
    control
    
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;