import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IAppState } from "src/app/redux/reducers/rootReducer";
import { changeSearchQueryAction } from "../resources-table/redux/actions/ResourcesActions";
import { resourcesSelector } from "../resources-table/redux/selectors/resourcesSelectors";

@Component({
  selector: "app-seatch-box",
  templateUrl: "./seatch-box.component.html",
  styleUrls: ["./seatch-box.component.css"],
})
export class SeatchBoxComponent implements OnInit {
  seatchQuery: string;
  ngUnsubscribe: Subject<void>;

  constructor(private store: Store<IAppState>) {
    this.ngUnsubscribe = new Subject<void>();
  }

  ngOnInit() {
    this.store
      .select(resourcesSelector)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((resourcesSytate) => {
        this.seatchQuery = resourcesSytate.seatchQuery;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onChangeSearch(searchQuery: string): void {
    this.store.dispatch(changeSearchQueryAction({ searchQuery }));
  }
}
