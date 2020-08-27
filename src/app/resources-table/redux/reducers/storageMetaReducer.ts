import { Action, ActionReducer } from "@ngrx/store";

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the key for the local storage.
const localStorageKey = "__app_storage__";

export function storageMetaReducer<S, A extends Action = Action>(
  reducer: ActionReducer<S, A>
) {
  let onInit = true;
  return function (state: S, action: A): S {
    const nextState = reducer(state, action);

    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      if (!!savedState) {
        return savedState;
      }
    }

    setSavedState(nextState, localStorageKey);
    return nextState;
  };
}
