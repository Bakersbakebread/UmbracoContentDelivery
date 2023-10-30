import axios from 'axios';

import type { IUmbracoContentDeliveryApi } from './interfaces/IUmbracoContentDeliveryApi';
import type { IUmbracoContentDeliveryApiItem } from './interfaces/IUmbracoContentDeliveryApiItem';
import type { IFetchSelectorAction } from './interfaces/IFetchSelectorAction';
import type { ISortAction } from './interfaces/ISortAction';
import { SortAction } from './actions/SortAction';
import { FetchSelectorAction } from './actions/FetchSelectorAction';
import { toQueryString } from './utils';


/**
 * Represents a fluent API wrapper for Umbraco Content Delivery API.
 */
export class UmbracoContentDeliveryApi implements IUmbracoContentDeliveryApi {
  public baseURL: string;
  public endpoint: string;
  public queryParams: any;

  /**
   * Initializes a new instance of the UmbracoContentDeliveryApi class.
   * @param baseURL The base URL of the Umbraco instance.
   * @param {string} endpoint The endpoint of the Umbraco Content Delivery API.
   */
  constructor(baseURL: string, endpoint: string = '/umbraco/delivery/api/v1/content') {
    this.baseURL = baseURL;
    this.endpoint = endpoint;
    this.queryParams = {};
  }

  /**
   * Creates a new instance of the FetchSelectorAction class.
   * @param selector The selector to fetch.
   * @returns A new instance of the FetchSelectorAction class.
   */
  fetch(
    selector: 'ancestors' | 'children' | 'descendants',
  ): IFetchSelectorAction {
    return new FetchSelectorAction(this, selector);
  }

  /**
   * Adds a fetch parameter to the query string.
   * @param selector The selector to fetch.
   * @param id The ID of the node to fetch.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  addFetch(
    selector: 'ancestors' | 'children' | 'descendants',
    id: string,
  ): IUmbracoContentDeliveryApi {
    this.queryParams.fetch = `${selector}:${id}`;
    return this;
  }

  //================================================================================================
  // FILTERING
  //================================================================================================

  /**
   * Adds a filter to the query string.
   * @param type The type of filter to add.
   * @param value The value of the filter.
   * @param negate Whether to negate the filter or not.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  addFilter(
    type: 'contentType' | 'name',
    value: string,
    negate: boolean,
  ): IUmbracoContentDeliveryApi {
    const filterValue = negate ? `!${value}` : value;
    this.queryParams.filter = this.queryParams.filter
      ? [...this.queryParams.filter, `${type}:${filterValue}`]
      : [`${type}:${filterValue}`];
    return this;
  }

  /**
   * Adds a filter to the query string to include nodes with a specific content type.
   * @param value The content type to include.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  withContentType(value: string): IUmbracoContentDeliveryApi {
    return this.addFilter('contentType', value, false);
  }

  /**
   * Adds a filter to the query string to include nodes with a specific name.
   * @param name The name of the nodes to include.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  withName(name: string): IUmbracoContentDeliveryApi {
    return this.addFilter('name', name, false);
  }

  /**
   * Adds a filter to the query string to exclude nodes with a specific content type.
   * @param value The content type to exclude.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  withoutContentType(value: string): IUmbracoContentDeliveryApi {
    return this.addFilter('contentType', value, true);
  }

  /**
   * Adds a filter to the query string to exclude nodes with a specific name.
   * @param name The name of the nodes to exclude.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  withoutName(name: string): IUmbracoContentDeliveryApi {
    return this.addFilter('name', name, true);
  }

  //================================================================================================
  // SORTING
  //================================================================================================

  /**
   * Creates a new instance of the SortAction class to sort by name.
   * @returns A new instance of the SortAction class.
   */
  sortByName(): ISortAction {
    return new SortAction(this, 'name');
  }

  /**
   * Creates a new instance of the SortAction class to sort by create date.
   * @returns A new instance of the SortAction class.
   */
  sortByCreateDate(): ISortAction {
    return new SortAction(this, 'createDate');
  }

  /**
   * Creates a new instance of the SortAction class to sort by level.
   * @returns A new instance of the SortAction class.
   */
  sortByLevel(): ISortAction {
    return new SortAction(this, 'level');
  }

  /**
   * Creates a new instance of the SortAction class to sort by sort order.
   * @returns A new instance of the SortAction class.
   */
  sortBySortOrder(): ISortAction {
    return new SortAction(this, 'sortOrder');
  }

  /**
   * Creates a new instance of the SortAction class to sort by update date.
   * @returns A new instance of the SortAction class.
   */
  sortByUpdateDate(): ISortAction {
    return new SortAction(this, 'updateDate');
  }

  /**
   * Adds a sort parameter to the query string.
   * @param field The field to sort by.
   * @param order The order to sort in.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  addSort(field: string, order: 'asc' | 'desc'): IUmbracoContentDeliveryApi {
    this.queryParams.sort = this.queryParams.sort
      ? [...this.queryParams.sort, `${field}:${order}`]
      : [`${field}:${order}`];
    return this;
  }

  //================================================================================================
  // PAGING
  //================================================================================================

  /**
   * Adds a skip parameter to the query string.
   * @param count The number of nodes to skip.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  skip(count: number): IUmbracoContentDeliveryApi {
    this.queryParams.skip = count;
    return this;
  }

  /**
   * Adds a take parameter to the query string.
   * @param count The number of nodes to take.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  take(count: number): IUmbracoContentDeliveryApi {
    this.queryParams.take = count;
    return this;
  }

  //================================================================================================
  // EXPANDING
  //================================================================================================

  /**
   * Adds an expand parameter to the query string to expand a specific property.
   * @param propertyAliases The aliases of the properties to expand.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApi {
    this.queryParams.expand = `property:${propertyAliases.join(',')}`;
    return this;
  }

  /**
   * Adds an expand parameter to the query string to expand all properties.
   * @returns The current instance of the UmbracoContentDeliveryApi class.
   */
  expandAll(): IUmbracoContentDeliveryApi {
    this.queryParams.expand = 'all';
    return this;
  }

  /**
   * Creates a new instance of the UmbracoContentDeliveryApiItem class.
   * @returns A new instance of the UmbracoContentDeliveryApiItem class.
   */
  item(): IUmbracoContentDeliveryApiItem {
    return new UmbracoContentDeliveryApiItem(this.baseURL, this.endpoint);
  }

  /**
   * Sends a GET request to the Umbraco Content Delivery API with the current query parameters.
   * @returns A Promise that resolves to the response data or rejects with an error.
   */
  get() {
    const url = `${this.baseURL}${this.endpoint}${toQueryString(
      this.queryParams,
    )}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => error);
  }

  /**
   * Returns the query string representation of the current set of query parameters.
   * @returns A string representing the query parameters.
   */
  getQueryString(): string {
    return toQueryString(this.queryParams);
  }
}

export class UmbracoContentDeliveryApiItem
  implements IUmbracoContentDeliveryApiItem {
  private baseURL: string;
  private endpoint: string;
  private queryParams: any;

  constructor(baseURL: string, endpoint: string | null = null) {
    this.baseURL = baseURL;
    this.endpoint = endpoint ?? '/umbraco/delivery/api/v1/content';
    this.queryParams = {};
  }

  expandProperty(...propertyAliases: string[]): IUmbracoContentDeliveryApiItem {
    this.queryParams.expand = `property:${propertyAliases.join(',')}`;
    return this;
  }
  expandAll(): IUmbracoContentDeliveryApiItem {
    this.queryParams.expand = 'all';
    return this;
  }

  byId(...id: string[]): IUmbracoContentDeliveryApiItem {
    this.endpoint = `/umbraco/delivery/api/v1/content/item/${id}`;
    return this as unknown as IUmbracoContentDeliveryApiItem;
  }

  byPath(path: string): IUmbracoContentDeliveryApiItem {
    if (path.match(/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i)) {
      throw new Error('Path cannot be a guid');
    }
    this.endpoint = `/umbraco/delivery/api/v1/content/item/${path}`;
    return this as unknown as IUmbracoContentDeliveryApiItem;
  }

  get() {
    const url = `${this.baseURL}${this.endpoint}${toQueryString(
      this.queryParams,
    )}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => error);
  }

  getURL() {
    return `${this.baseURL}${this.endpoint}${toQueryString(this.queryParams)}`;
  }
}
