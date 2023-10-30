export interface IUmbracoContentDeliveryApiItem {
    byId(...id: string[]): IUmbracoContentDeliveryApiItem;
    byPath(path: string): IUmbracoContentDeliveryApiItem;
    expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApiItem;
    expandAll(): IUmbracoContentDeliveryApiItem;
    get(): Promise<any>;
}
//# sourceMappingURL=IUmbracoContentDeliveryApiItem.d.ts.map