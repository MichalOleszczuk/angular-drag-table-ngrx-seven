import { ISorting, PeriodicElement } from "./IResourcesReducer";

export function sortResourcesList(
  resourcesList: Array<PeriodicElement>,
  sorting: ISorting
) {
  function sortResources(element1: PeriodicElement, element2: PeriodicElement) {
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
  resources: Array<PeriodicElement>,
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
