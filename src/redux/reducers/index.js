import { combineReducers } from 'redux';
import userInfo from './userInfo';
import {collapse } from './setting';
export default combineReducers({ userInfo, collapse });
