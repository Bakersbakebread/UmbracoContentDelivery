import type { ISortAction } from './ISortAction';
import type { IFetchSelectorAction } from './IFetchSelectorAction';
import type { IUmbracoContentDeliveryApiItem } from './IUmbracoContentDeliveryApiItem';

export interface IUmbracoContentDeliveryApi {
  queryParams: { [key: string]: string | number | string[] };

  // fetching
  fetch(
    selector: 'ancestors' | 'children' | 'descendants',
  ): IFetchSelectorAction;
  addFetch(selector: string, id: string): IUmbracoContentDeliveryApi;

  // filtering
  withContentType(value: string): IUmbracoContentDeliveryApi;
  withName(name: string): IUmbracoContentDeliveryApi;
  withoutContentType(value: string): IUmbracoContentDeliveryApi;
  withoutName(name: string): IUmbracoContentDeliveryApi;

  // sorting
  sortByName(): ISortAction;
  sortByCreateDate(): ISortAction;
  sortByLevel(): ISortAction;
  sortBySortOrder(): ISortAction;
  sortByUpdateDate(): ISortAction;
  addSort(field: string, arg1: string): IUmbracoContentDeliveryApi;

  // paging
  skip(count: number): IUmbracoContentDeliveryApi;
  take(count: number): IUmbracoContentDeliveryApi;

  //expanding
  expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApi;
  expandAll(): IUmbracoContentDeliveryApi;
  // delivering
  get(): Promise<any>;
  getQueryString(): string;
  item(): IUmbracoContentDeliveryApiItem;

  // headers
  withCulture(culture: string): IUmbracoContentDeliveryApi;
  isPreview(): IUmbracoContentDeliveryApi;
}
