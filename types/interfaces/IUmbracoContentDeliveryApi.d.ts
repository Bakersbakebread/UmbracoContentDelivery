import type { ISortAction, IFetchSelectorAction, IUmbracoContentDeliveryApiItem } from '.';
export interface IUmbracoContentDeliveryApi {
    queryParams: {
        string: string;
    };
    fetch(selector: 'ancestors' | 'children' | 'descendants'): IFetchSelectorAction;
    addFetch(selector: string, id: string): IUmbracoContentDeliveryApi;
    withContentType(value: string): IUmbracoContentDeliveryApi;
    withName(name: string): IUmbracoContentDeliveryApi;
    withoutContentType(value: string): IUmbracoContentDeliveryApi;
    withoutName(name: string): IUmbracoContentDeliveryApi;
    sortByName(): ISortAction;
    sortByCreateDate(): ISortAction;
    sortByLevel(): ISortAction;
    sortBySortOrder(): ISortAction;
    sortByUpdateDate(): ISortAction;
    addSort(field: string, arg1: string): IUmbracoContentDeliveryApi;
    skip(count: number): IUmbracoContentDeliveryApi;
    take(count: number): IUmbracoContentDeliveryApi;
    expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApi;
    expandAll(): IUmbracoContentDeliveryApi;
    get(): Promise<any>;
    getQueryString(): string;
    item(): IUmbracoContentDeliveryApiItem;
}
//# sourceMappingURL=IUmbracoContentDeliveryApi.d.ts.map