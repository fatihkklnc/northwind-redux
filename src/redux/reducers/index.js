/* Annova Software

File:reducer/index.js

Contents: reducerlar combine edildi 

History: 12.03.2021 FatihK
*/ 
import {combineReducers} from "redux";
import changeCategoryReducer from "./ChangeCategoryReducer";

const rootReducer = combineReducers({
    changeCategoryReducer
})
export default rootReducer;