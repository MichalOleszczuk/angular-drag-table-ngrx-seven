export interface IResourcesReducer {
  seatchQuery: string;
  resourcesList: Array<PeriodicElement>;
  filteredResourcesList: Array<PeriodicElement>;
  sorting: ISorting;
}

export type ISorting = {
  [key in keyof PeriodicElement]: { asc: boolean };
};

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
