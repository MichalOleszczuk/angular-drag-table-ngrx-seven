import { IPeriodicElement } from "src/app/services/resources/interfaces/IResources";

export interface IResourcesReducer {
  seatchQuery: string;
  resourcesList: Array<IPeriodicElement>;
  filteredResourcesList: Array<IPeriodicElement>;
  sorting: ISorting;
  resourcesInrogress: boolean;
  pagination: IPagination;
}

export interface IPagination {
  count: number;
  page: number;
  pageCount: number;
  limit: number;
}

export type ISorting = {
  [key in keyof IPeriodicElement]: { asc: boolean };
};
