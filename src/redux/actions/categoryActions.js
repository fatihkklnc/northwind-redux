/* Annova Software

File:categoryActions.js

Contents: uygulamada gönderilen category değerleri ilgili actiontypes a yönlendirildi

History: 11.03.2021 FatihK
*/ 
import * as ActionTypes from "./ActionTypes"

export function changeCategory(category){
    return{type:ActionTypes.CHANGE_CATEGORY,payload:category}
}