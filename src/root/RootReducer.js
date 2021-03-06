// --- redux-saga
import { combineReducers } from 'redux';

import {
    menuListReducer,
    logInOutReducer,
    sideBarReducer,
    dashReducer,
    Auth
} from 'common/reducer/commonReducer';
import hr from 'erp/hr/root/RootReducer';
import AccReducer from 'erp/account/root/RootReducer';
import logistic from 'erp/logistic/root/RootReducer';
import loading from '../util/loading';

/*--------------------------------------------------------------------*/
const RootReducers = combineReducers({//안에 있는 모듈을 하나로 합침
    menuListReducer, // RouteMenuComponents
    logInOutReducer,
    sideBarReducer,
    hr,
    AccReducer,
    logistic,
    dashReducer,
    Auth,
    loading
});

export default RootReducers;
