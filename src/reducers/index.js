import App from "./../App";
import { combineReducers } from 'redux';
//import { createStore } from "redux";
import { legacy_createStore as createStore } from 'redux';
//import { store } from './app/store'
import { Provider } from 'react-redux'

import movieReducer from './movieReducer';



export default movieReducer;