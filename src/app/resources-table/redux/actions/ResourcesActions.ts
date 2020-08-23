import { CreateActionWithPayload } from "src/app/services/CreateAction";
import {
  IChangeSearchQeryAction,
  ISetSortingAction,
} from "./IResourcesActions";
import { RESOURCES_ACTION_TYPES } from "./resourcesListActionTypes";

export const setSortingAction = CreateActionWithPayload<ISetSortingAction>(
  RESOURCES_ACTION_TYPES.SET_SORTING
);

export const changeSearchQueryAction = CreateActionWithPayload<
  IChangeSearchQeryAction
>(RESOURCES_ACTION_TYPES.CHANGE_SEARCH_QUERY);
