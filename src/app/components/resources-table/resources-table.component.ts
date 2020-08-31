import {
  CdkDragStart,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { IAppState } from "../../redux/reducers/rootReducer";
import { IPeriodicElement } from "../../services/resources/interfaces/IResources";
import { ResourcesListDataSource } from "./data/ResourcesListDataSource";
import {
  getResourcesAction,
  setSortingAction,
} from "./redux/actions/ResourcesActions";
import { IPagination, ISorting } from "./redux/reducers/IResourcesReducer";
import { resourcesTableSelector } from "./redux/selectors/resourcesSelectors";

@Component({
  selector: "app-resources-table",
  templateUrl: "./resources-table.component.html",
  styleUrls: ["./resources-table.component.scss"],
})
export class ResourcesTableComponent implements OnInit {
  dataSource: ResourcesListDataSource;
  sorting: ISorting;
  resourcesInrogress: boolean;
  subscriptions: Subscription[] = [];
  pagination: IPagination;

  constructor(private store: Store<IAppState>) {}

  columns: Array<{ field: keyof IPeriodicElement; index: number }> = [
    { field: "position", index: 0 },
    { field: "name", index: 1 },
    { field: "weight", index: 2 },
    { field: "symbol", index: 3 },
  ];
  displayedColumns: string[] = [];

  previousIndex: number;

  ngOnInit(): void {
    const resourcesTable$ = this.store.select(resourcesTableSelector);
    const resourcesTableSub = resourcesTable$.subscribe((resourcesTable) => {
      this.resourcesInrogress = resourcesTable.resourcesInrogress;
      this.sorting = resourcesTable.sorting;
      this.pagination = resourcesTable.pagination;
      this.dataSource = new ResourcesListDataSource(
        resourcesTable.filteredResourcesList
      );
    });
    this.subscriptions.push(resourcesTableSub);

    this.store.dispatch(getResourcesAction(this.pagination));
    this.setDisplayedColumns();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  setDisplayedColumns(): void {
    this.columns.forEach((colunm, index) => {
      colunm.index = index;
      this.displayedColumns[index] = colunm.field;
    });
  }

  dragStarted(event: CdkDragStart, index: number): void {
    this.previousIndex = index;
  }

  dropListDropped(event: CdkDropList, index: number): void {
    if (event) {
      moveItemInArray(this.columns, this.previousIndex, index);
      this.setDisplayedColumns();
    }
  }

  onThClick(fieldName: keyof IPeriodicElement): void {
    this.store.dispatch(
      setSortingAction({ field: fieldName, asc: !this.sorting[fieldName].asc })
    );
  }
}
