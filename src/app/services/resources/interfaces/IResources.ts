export interface IPeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface IBackEndResponse<T = any> {
  page: number;
  pageCount: number;
  count: number;
  data: T;
}

export interface IGetPeriodicElementsQueryParams {
  page: number;
  limit: number;
}
