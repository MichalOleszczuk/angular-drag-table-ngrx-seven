import { IPeriodicElement } from "src/app/services/resources/interfaces/IResources";
import { ISorting } from "./IResourcesReducer";

export function sortResourcesList(
  resourcesList: Array<IPeriodicElement>,
  sorting: ISorting
) {
  function sortResources(element1: IPeriodicElement, element2: IPeriodicElement) {
    const objectEntities = Object.entries(sorting);

    for (const [sortKey, sort] of objectEntities) {
      if (sort.asc) {
        if (element1[sortKey] < element2[sortKey]) {
          return 1;
        }
        if (element1[sortKey] > element2[sortKey]) {
          return -1;
        }
      } else {
        if (element1[sortKey] > element2[sortKey]) {
          return 1;
        }
        if (element1[sortKey] < element2[sortKey]) {
          return -1;
        }
      }
    }
    return 0;
  }
  return resourcesList.sort(sortResources);
}

export function filterResources(
  resources: Array<IPeriodicElement>,
  searchQuery: string
) {
  return resources.filter((resource) => {
    let result = false;

    for (const res of Object.values(resource)) {
      if (
        (res.toString().toLocaleLowerCase() as string).includes(
          searchQuery.toLowerCase()
        )
      ) {
        result = true;
        break;
      }
      result = false;
    }

    return result;
  });
}
