import { CreateActionWithPayload } from "src/app/services/CreateAction";
import {
  IChangeSearchQeryAction,
  IGetResourcessAction,
  IGetResourcessFailedAction,
  IGetResourcessSuccessAction,
  ISetSortingAction,
} from "./IResourcesActions";
import { RESOURCES_ACTION_TYPES } from "./resourcesListActionTypes";

export const setSortingAction = CreateActionWithPayload<ISetSortingAction>(
  RESOURCES_ACTION_TYPES.SET_SORTING
);

export const changeSearchQueryAction = CreateActionWithPayload<
  IChangeSearchQeryAction
>(RESOURCES_ACTION_TYPES.CHANGE_SEARCH_QUERY);

export const getResourcesAction = CreateActionWithPayload<IGetResourcessAction>(
  RESOURCES_ACTION_TYPES.GET_RESOURCES
);

export const getResourcesSuccessAction = CreateActionWithPayload<
  IGetResourcessSuccessAction
>(RESOURCES_ACTION_TYPES.GET_RESOURCES_SUCCESS);

export const getResourcesFailedAction = CreateActionWithPayload<
  IGetResourcessFailedAction
>(RESOURCES_ACTION_TYPES.GET_RESOURCES_FAILED);
