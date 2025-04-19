import { createAction, props } from "@ngrx/store";


export const loadData=createAction('[data] load')

export const loadDataSuccess=createAction('[data] load Data success',props<{data:any}>())
export const loadDataFailure=createAction('[data] load Data Fail',props<{error:any}>())