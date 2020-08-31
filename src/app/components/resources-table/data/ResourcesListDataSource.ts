import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { IPeriodicElement } from "src/app/services/resources/interfaces/IResources";

export class ResourcesListDataSource extends DataSource<IPeriodicElement> {
  /** Stream of data that is provided to the table. */
  data: BehaviorSubject<IPeriodicElement[]>;

  constructor(resourcesList: IPeriodicElement[]) {
    super();
    this.data = new BehaviorSubject<IPeriodicElement[]>(resourcesList);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<IPeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
