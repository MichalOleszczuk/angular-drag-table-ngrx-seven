import { IResourcesActions } from "../actions/IResourcesActions";
import { RESOURCES_ACTION_TYPES } from "../actions/resourcesListActionTypes";
import { IResourcesReducer } from "./IResourcesReducer";
import { filterResources, sortResourcesList } from "./utils";

export const defaultResourcesState: IResourcesReducer = {
  seatchQuery: "",
  resourcesList: [],
  filteredResourcesList: [],
  sorting: {
    position: { asc: false },
    name: { asc: false },
    weight: { asc: false },
    symbol: { asc: false },
  },
  pagination: {
    count: 0,
    pageCount: 0,
    page: 1,
    limit: 10,
  },
  resourcesInrogress: false,
  errorMessage: "",
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

    case RESOURCES_ACTION_TYPES.GET_RESOURCES: {
      return {
        ...state,
        resourcesInrogress: true,
      };
    }

    case RESOURCES_ACTION_TYPES.GET_RESOURCES_SUCCESS: {
      const { count, page, pageCount, data } = action.payload;

      return {
        ...state,
        resourcesInrogress: false,
        resourcesList: data,
        filteredResourcesList: sortResourcesList(
          filterResources(data, state.seatchQuery),
          state.sorting
        ),
        pagination: { ...state.pagination, count, page, pageCount },
        errorMessage: "",
      };
    }

    case RESOURCES_ACTION_TYPES.GET_RESOURCES_FAILED: {
      const { error } = action.payload;

      return {
        ...state,
        resourcesInrogress: false,
        errorMessage: error,
      };
    }

    default: {
      return state;
    }
  }
}
