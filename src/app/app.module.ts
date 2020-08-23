import { DragDropModule } from "@angular/cdk/drag-drop";
import { CdkTableModule } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { rootReducer } from "./redux/reducers/rootReducer";
import { storageMetaReducer } from "./resources-table/redux/reducers/storageMetaReducer";
import { ResourcesTableComponent } from "./resources-table/resources-table.component";

@NgModule({
  declarations: [AppComponent, ResourcesTableComponent],
  imports: [
    CdkTableModule,
    DragDropModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    StoreModule.forRoot(rootReducer, {
      metaReducers: [storageMetaReducer],
    }),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
