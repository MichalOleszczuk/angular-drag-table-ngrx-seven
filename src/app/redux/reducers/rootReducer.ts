import { ActionReducerMap } from '@ngrx/store';
import { resourcesReducer } from '../../resources-table/redux/reducers/resources-table.reducer';

export interface IAppState {
  resources: ReturnType<typeof resourcesReducer>;
}

export const rootReducer: ActionReducerMap<IAppState> = {
  resources: resourcesReducer,
};
