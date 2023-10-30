import type { IUmbracoContentDeliveryApi } from '../interfaces/IUmbracoContentDeliveryApi';
import type { IFetchSelectorAction } from '../interfaces/IFetchSelectorAction';

export class FetchSelectorAction implements IFetchSelectorAction {
  private selector: 'ancestors' | 'children' | 'descendants';
  private baseQuery: IUmbracoContentDeliveryApi;

  constructor(
    baseQuery: IUmbracoContentDeliveryApi,
    selector: 'ancestors' | 'children' | 'descendants',
  ) {
    this.baseQuery = baseQuery;
    this.selector = selector;
  }

  byId(id: string): IUmbracoContentDeliveryApi {
    // if ID is not a guid, throw error
    if (!id.match(/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i)) {
      throw new Error('ID must be a guid');
    }
    this.baseQuery.addFetch(this.selector, id);
    return this.baseQuery;
  }

  byPath(path: string): IUmbracoContentDeliveryApi {
    // check path is not a guid
    if (path.match(/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i)) {
      throw new Error('Path cannot be a guid');
    }
    // if path starts with a / remove it
    if (path.startsWith('/')) {
      path = path.slice(1);
    }
    this.baseQuery.addFetch(this.selector, path);
    return this.baseQuery;
  }
}
