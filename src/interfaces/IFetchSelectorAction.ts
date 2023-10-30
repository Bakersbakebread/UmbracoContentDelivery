import type { IUmbracoContentDeliveryApi } from './IUmbracoContentDeliveryApi';

/**
 * Interface for a fetch selector action, which provides methods for fetching Umbraco content
 * by ID or path.
 */
export interface IFetchSelectorAction {
  /**
   * Fetches Umbraco content by ID.
   * @param id The ID of the content to fetch.
   * @returns An instance of the Umbraco content delivery API.
   */
  byId(id: string): IUmbracoContentDeliveryApi;

  /**
   * Fetches Umbraco content by path.
   * @param path The path of the content to fetch.
   * @returns An instance of the Umbraco content delivery API.
   */
  byPath(path: string): IUmbracoContentDeliveryApi;
}
