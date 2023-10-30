import type { IUmbracoContentDeliveryApi } from './IUmbracoContentDeliveryApi';
export interface IFetchSelectorAction {
    byId(id: string): IUmbracoContentDeliveryApi;
    byPath(path: string): IUmbracoContentDeliveryApi;
}
//# sourceMappingURL=IFetchSelectorAction.d.ts.map