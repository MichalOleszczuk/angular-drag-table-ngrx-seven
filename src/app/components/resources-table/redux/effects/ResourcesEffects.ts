import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, delay, map, mergeMap } from "rxjs/operators";
import { IActionPayload } from "src/app/services/CreateAction";
import { ResourcesService } from "src/app/services/resources/resources.service";
import { IGetResourcessAction } from "../actions/IResourcesActions";
import {
  getResourcesFailedAction,
  getResourcesSuccessAction,
} from "../actions/ResourcesActions";
import { RESOURCES_ACTION_TYPES } from "../actions/resourcesListActionTypes";

@Injectable()
export class ResourcesEffects {
  @Effect()
  getPeriodicElements$ = this.actions$.pipe(
    ofType<
      IActionPayload<IGetResourcessAction, RESOURCES_ACTION_TYPES.GET_RESOURCES>
    >(RESOURCES_ACTION_TYPES.GET_RESOURCES),
    mergeMap(({ payload }) =>
      this.resourcesService.getPeriodicElements(payload).pipe(
        map((response) => getResourcesSuccessAction(response)),
        catchError((error) =>
          of(getResourcesFailedAction({ error: error.message }))
        ),
        // INFO: delay just to see spinner.
        delay(3000)
      )
    )
  );

  constructor(
    private actions$: Actions,
    private resourcesService: ResourcesService
  ) {}
}
