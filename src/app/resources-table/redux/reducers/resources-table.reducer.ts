import { IResourcesActions } from "../actions/IResourcesActions";
import { RESOURCES_ACTION_TYPES } from "../actions/resourcesListActionTypes";
import { IResourcesReducer, PeriodicElement } from "./IResourcesReducer";
import { filterResources, sortResourcesList } from "./utils";

const resourcesList: PeriodicElement[] = [
  { position: 1, name: "aaa", weight: 1.0079, symbol: "H" },
  { position: 2, name: "bbb", weight: 4.0026, symbol: "He" },
  { position: 3, name: "ccc", weight: 6.941, symbol: "Li" },
  { position: 3, name: "ddd", weight: 9.0122, symbol: "Be" },
  { position: 3, name: "eeee", weight: 10.811, symbol: "B" },
  { position: 3, name: "eeee", weight: 12.0107, symbol: "C" },
  { position: 3, name: "eeee", weight: 14.0067, symbol: "Na" },
  { position: 3, name: "eeee", weight: 14.0067, symbol: "O" },
  { position: 3, name: "eeee", weight: 14.0067, symbol: "F" },
  { position: 3, name: "eeee", weight: 14.0067, symbol: "Ne" },
];

export const defaultResourcesState: IResourcesReducer = {
  seatchQuery: "",
  resourcesList,
  filteredResourcesList: resourcesList,
  sorting: {
    position: { asc: false },
    name: { asc: false },
    weight: { asc: false },
    symbol: { asc: false },
  },
};

export function resourcesReducer(
  state: IResourcesReducer = defaultResourcesState,
  action: IResourcesActions
): IResourcesReducer {
  switch (action.type) {
    case RESOURCES_ACTION_TYPES.CHANGE_SEARCH_QUERY: {
      const searchQuery = action.payload.searchQuery;

      const filteredResourcesList = filterResources(
        state.resourcesList,
        searchQuery
      );

      return {
        ...state,
        filteredResourcesList,
        seatchQuery: action.payload.searchQuery,
      };
    }
    case RESOURCES_ACTION_TYPES.SET_SORTING: {
      const { field, asc } = action.payload;
      const newSorting = { ...state.sorting };
      newSorting[field] = { asc };

      return {
        ...state,
        sorting: newSorting,
        filteredResourcesList: sortResourcesList(
          state.filteredResourcesList,
          newSorting
        ),
      };
    }
    default: {
      return state;
    }
  }
}
