import {
  IBackEndResponse,
  IPeriodicElement,
} from "src/app/services/resources/interfaces/IResources";
import { IActionPayload } from "../../../services/CreateAction";
import { RESOURCES_ACTION_TYPES } from "./resourcesListActionTypes";

export type IResourcesActions =
  | IActionPayload<ISetSortingAction, RESOURCES_ACTION_TYPES.SET_SORTING>
  | IActionPayload<
      IChangeSearchQeryAction,
      RESOURCES_ACTION_TYPES.CHANGE_SEARCH_QUERY
    >
  | IActionPayload<IGetResourcessAction, RESOURCES_ACTION_TYPES.GET_RESOURCES>
  | IActionPayload<
      IGetResourcessSuccessAction,
      RESOURCES_ACTION_TYPES.GET_RESOURCES_SUCCESS
    >
  | IActionPayload<
      IGetResourcessFailedAction,
      RESOURCES_ACTION_TYPES.GET_RESOURCES_FAILED
    >;

export interface ISetSortingAction {
  field: keyof IPeriodicElement;
  asc: boolean;
}

export interface IChangeSearchQeryAction {
  searchQuery: string;
}

export interface IGetResourcessAction {
  page: number;
  limit: number;
}
export type IGetResourcessSuccessAction = IBackEndResponse<IPeriodicElement[]>;

export interface IGetResourcessFailedAction {
  error: string;
}
