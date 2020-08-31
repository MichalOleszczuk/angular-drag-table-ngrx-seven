import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAppState } from "../../../../redux/reducers/rootReducer";

export const resourcesSelector = createFeatureSelector<
  IAppState,
  IAppState["resources"]
>("resources");

export const resourcesInrogressSelector = createSelector(
  resourcesSelector,
  (state: IAppState["resources"]) => state.resourcesInrogress
);

export const resourcesTableSelector = createSelector(
  resourcesSelector,
  resourcesInrogressSelector,
  (resourcesState: IAppState["resources"], resourcesInrogress) => {
    return {
      resourcesInrogress,
      sorting: resourcesState.sorting,
      pagination: resourcesState.pagination,
      filteredResourcesList: resourcesState.filteredResourcesList,
    };
  }
);
