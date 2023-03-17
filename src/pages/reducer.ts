import { combineReducers }  from '@reduxjs/toolkit';
import homeReducer from './Home/redux';
import sponsorsReducer from './Sponsors/redux';

export const reducer = {
  homeReducer,
  sponsorsReducer
}