
import type { ISortAction } from '../interfaces/ISortAction';
import type { IUmbracoContentDeliveryApi } from '../interfaces/IUmbracoContentDeliveryApi';

export class SortAction implements ISortAction {
  private baseQuery: IUmbracoContentDeliveryApi;
  private field: string;

  constructor(baseQuery: IUmbracoContentDeliveryApi, field: string) {
    this.baseQuery = baseQuery;
    this.field = field;
  }

  ascending(): IUmbracoContentDeliveryApi {
    this.baseQuery.addSort(this.field, 'asc');
    return this.baseQuery;
  }

  descending(): IUmbracoContentDeliveryApi {
    this.baseQuery.addSort(this.field, 'desc');
    return this.baseQuery;
  }
}
