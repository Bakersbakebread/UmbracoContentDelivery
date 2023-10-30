import type { IUmbracoContentDeliveryApi } from './IUmbracoContentDeliveryApi';


export interface ISortAction {
  ascending(): IUmbracoContentDeliveryApi;
  descending(): IUmbracoContentDeliveryApi;
}
