import { DragDropModule } from "@angular/cdk/drag-drop";
import { CdkTableModule } from "@angular/cdk/table";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { rootReducer } from "./redux/reducers/rootReducer";
import { ResourcesEffects } from "./resources-table/redux/effects/ResourcesEffects";
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
    MatProgressSpinnerModule,
    StoreModule.forRoot(rootReducer, {
      metaReducers: [storageMetaReducer],
    }),
    EffectsModule.forRoot([ResourcesEffects]),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
