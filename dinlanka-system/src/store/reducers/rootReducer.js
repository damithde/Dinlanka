import authReducer from './authReducer'
import shipmentReducer from './shipmentReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  shipment: shipmentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
