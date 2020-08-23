import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodicElement } from '../redux/reducers/IResourcesReducer';

export class ResourcesListDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data: BehaviorSubject<PeriodicElement[]>;

  constructor(resourcesList: PeriodicElement[]) {
    super();
    this.data = new BehaviorSubject<PeriodicElement[]>(resourcesList);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
