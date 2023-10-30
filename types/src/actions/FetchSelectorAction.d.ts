import type { IUmbracoContentDeliveryApi } from '../../interfaces/IUmbracoContentDeliveryApi';
import type { IFetchSelectorAction } from '../../interfaces/IFetchSelectorAction';
export declare class FetchSelectorAction implements IFetchSelectorAction {
    private selector;
    private baseQuery;
    constructor(baseQuery: IUmbracoContentDeliveryApi, selector: 'ancestors' | 'children' | 'descendants');
    byId(id: string): IUmbracoContentDeliveryApi;
    byPath(path: string): IUmbracoContentDeliveryApi;
}
//# sourceMappingURL=FetchSelectorAction.d.ts.map