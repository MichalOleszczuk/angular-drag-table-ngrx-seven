import { createSelector } from "@ngrx/store";
import { IAppState } from "../../../../redux/reducers/rootReducer";
import {
  resourcesInrogressSelector,
  resourcesSelector,
} from "../../../resources-table/redux/selectors/resourcesSelectors";

export const sampleAsyncPipeSelector = createSelector(
  resourcesSelector,
  resourcesInrogressSelector,
  (resourcesState: IAppState["resources"], resourcesInrogress) => {
    return {
      resourcesInrogress,
      resourcesList: resourcesState.resourcesList,
    };
  }
);
