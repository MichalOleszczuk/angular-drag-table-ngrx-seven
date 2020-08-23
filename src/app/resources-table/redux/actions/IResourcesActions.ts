import { IActionPayload } from "../../../services/CreateAction";
import { PeriodicElement } from "../reducers/IResourcesReducer";
import { RESOURCES_ACTION_TYPES } from "./resourcesListActionTypes";

export type IResourcesActions =
  | IActionPayload<ISetSortingAction, RESOURCES_ACTION_TYPES.SET_SORTING>
  | IActionPayload<
      IChangeSearchQeryAction,
      RESOURCES_ACTION_TYPES.CHANGE_SEARCH_QUERY
    >;

export interface ISetSortingAction {
  field: keyof PeriodicElement;
  asc: boolean;
}

export interface IChangeSearchQeryAction {
  searchQuery: string;
}
