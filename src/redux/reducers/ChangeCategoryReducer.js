/* Annova Software

File:ChanceCategoryReducer.js

Contents: gelen action a göre switch case yapısı yazıldı

History: 11.03.2021 FatihK
*/ 
import * as ActionTypes from "../actions/ActionTypes";
import initialState from "./initialState";


export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case ActionTypes.CHANGE_CATEGORY:
            return(action.payload)
    
        default:
            return state;
    }
}
