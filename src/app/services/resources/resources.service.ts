import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IBackEndResponse,
  IGetPeriodicElementsQueryParams,
  IPeriodicElement,
} from "./interfaces/IResources";

@Injectable({
  providedIn: "root",
})
export class ResourcesService {
  private periodicElementsUrl = `${environment.apiUrl}resources`;

  constructor(private http: HttpClient) {}

  getPeriodicElements({
    page,
    limit,
  }: IGetPeriodicElementsQueryParams): Observable<
    IBackEndResponse<IPeriodicElement[]>
  > {
    const query = `${this.periodicElementsUrl}?page=${page}&limit=${limit}`;
    return this.http.get<IBackEndResponse<IPeriodicElement[]>>(query);
  }
}
