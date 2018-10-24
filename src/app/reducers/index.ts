import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

/* tslint:disable: no-empty-interface */
export interface State {
}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: Array<MetaReducer<State>> = !environment.production ? [] : [];
