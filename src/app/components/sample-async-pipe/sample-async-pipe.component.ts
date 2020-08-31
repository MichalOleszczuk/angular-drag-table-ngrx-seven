import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IAppState } from "src/app/redux/reducers/rootReducer";
import { IPeriodicElement } from "src/app/services/resources/interfaces/IResources";
import { sampleAsyncPipeSelector } from "./redux/selectors/sampleAsyncPipeSelectors";

@Component({
  selector: "app-sample-async-pipe",
  templateUrl: "./sample-async-pipe.component.html",
  styleUrls: ["./sample-async-pipe.component.css"],
})
export class SampleAsyncPipeComponent implements OnInit {
  sampleAsyncPipe$: Observable<{
    resourcesInrogress: boolean;
    resourcesList: IPeriodicElement[];
  }>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.sampleAsyncPipe$ = this.store.select(sampleAsyncPipeSelector);
    this.sampleAsyncPipe$.subscribe((siema) => console.log("siema", siema));
  }
}
