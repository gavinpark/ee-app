import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createMiddleware from './middleware/clientMiddleware';

export default function createStore(data, history, client) {
  const middleware = [createMiddleware(client), thunk];

  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const finalCreateStore = composeEnhancers(
    applyMiddleware(...middleware)
  )(_createStore);

  const reducer = require('./reducer').default;

  const store = finalCreateStore(reducer, data);

  return store;
}
