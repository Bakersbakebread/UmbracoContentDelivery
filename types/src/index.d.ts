import type { IUmbracoContentDeliveryApi, IUmbracoContentDeliveryApiItem, IFetchSelectorAction, ISortAction } from '../interfaces/';
export declare class UmbracoContentDeliveryApi implements IUmbracoContentDeliveryApi {
    baseURL: string;
    endpoint: string;
    queryParams: any;
    constructor(baseURL: string, endpoint?: string | null);
    fetch(selector: 'ancestors' | 'children' | 'descendants'): IFetchSelectorAction;
    addFetch(selector: 'ancestors' | 'children' | 'descendants', id: string): IUmbracoContentDeliveryApi;
    withContentType(value: string): IUmbracoContentDeliveryApi;
    withName(name: string): IUmbracoContentDeliveryApi;
    withoutContentType(value: string): IUmbracoContentDeliveryApi;
    withoutName(name: string): IUmbracoContentDeliveryApi;
    addFilter(type: 'contentType' | 'name', value: string, negate: boolean): IUmbracoContentDeliveryApi;
    sortByName(): ISortAction;
    sortByCreateDate(): ISortAction;
    sortByLevel(): ISortAction;
    sortBySortOrder(): ISortAction;
    sortByUpdateDate(): ISortAction;
    addSort(field: string, order: 'asc' | 'desc'): IUmbracoContentDeliveryApi;
    skip(count: number): IUmbracoContentDeliveryApi;
    take(count: number): IUmbracoContentDeliveryApi;
    expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApi;
    expandAll(): IUmbracoContentDeliveryApi;
    item(): IUmbracoContentDeliveryApiItem;
    get(): Promise<any>;
    /**
     * Returns the query string representation of the current set of query parameters.
     * @returns A string representing the query parameters.
     */
    getQueryString(): string;
}
export declare class UmbracoContentDeliveryApiItem implements IUmbracoContentDeliveryApiItem {
    private baseURL;
    private endpoint;
    private queryParams;
    constructor(baseURL: string, endpoint?: string | null);
    expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApiItem;
    expandAll(): IUmbracoContentDeliveryApiItem;
    byId(...id: string[]): IUmbracoContentDeliveryApiItem;
    byPath(path: string): IUmbracoContentDeliveryApiItem;
    get(): Promise<any>;
    getURL(): string;
}
//# sourceMappingURL=index.d.ts.map