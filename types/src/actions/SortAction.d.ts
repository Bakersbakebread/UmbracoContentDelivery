import type { ISortAction, IUmbracoContentDeliveryApi } from '../../interfaces';
export declare class SortAction implements ISortAction {
    private baseQuery;
    private field;
    constructor(baseQuery: IUmbracoContentDeliveryApi, field: string);
    ascending(): IUmbracoContentDeliveryApi;
    descending(): IUmbracoContentDeliveryApi;
}
//# sourceMappingURL=SortAction.d.ts.map