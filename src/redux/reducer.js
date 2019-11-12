import { combineReducers } from 'redux';

import ui from './modules/ui';

export default combineReducers({
  _ui: ui,
});
