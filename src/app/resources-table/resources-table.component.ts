import {
  CdkDragStart,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAppState } from "../redux/reducers/rootReducer";
import { ResourcesListDataSource } from "./data/ResourcesListDataSource";
import {
  changeSearchQueryAction,
  setSortingAction,
} from "./redux/actions/ResourcesActions";
import { ISorting, PeriodicElement } from "./redux/reducers/IResourcesReducer";
import { resourcesSelector } from "./redux/selectors/resourcesSelectors";

@Component({
  selector: "app-resources-table",
  templateUrl: "./resources-table.component.html",
  styleUrls: ["./resources-table.component.scss"],
})
export class ResourcesTableComponent implements OnInit {
  dataSource: ResourcesListDataSource;
  sorting: ISorting;
  seatchQuery: string;

  constructor(private store: Store<IAppState>) {
    this.store.select(resourcesSelector).subscribe((resourcesSytate) => {
      this.dataSource = new ResourcesListDataSource(
        resourcesSytate.filteredResourcesList
      );
      this.sorting = resourcesSytate.sorting;
      this.seatchQuery = resourcesSytate.seatchQuery;
    });
  }

  columns: any[] = [
    { field: "position" },
    { field: "name" },
    { field: "weight" },
    { field: "symbol" },
  ];
  displayedColumns: string[] = [];

  previousIndex: number;

  ngOnInit(): void {
    this.setDisplayedColumns();
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

  onThClick(fieldName: keyof PeriodicElement): void {
    this.store.dispatch(
      setSortingAction({ field: fieldName, asc: !this.sorting[fieldName].asc })
    );
  }

  onChangeSearch(searchQuery: string): void {
    this.store.dispatch(changeSearchQueryAction({ searchQuery }));
  }
}
