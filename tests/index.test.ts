import { UmbracoContentDeliveryApi } from '../src/index';
import axios from 'axios';

const baseURL = 'http://localhost:3000';
const API_KEY = '12345678-1234-1234-1234-123456789012';
const umbracoContent = new UmbracoContentDeliveryApi(API_KEY, baseURL);

test('should create a new instance of UmbracoContentDeliveryApi', () => {
  expect(umbracoContent).toBeInstanceOf(UmbracoContentDeliveryApi);
});

test('should set the baseURL', () => {
  expect(umbracoContent.baseURL).toBe(baseURL);
});

test('should set the endpoint', () => {
  expect(umbracoContent.endpoint).toBe('/umbraco/delivery/api/v1/content');
});

test('should set the endpoint to a custom value', () => {
  const api = new UmbracoContentDeliveryApi(API_KEY, baseURL, '/custom/endpoint');
  expect(api.endpoint).toBe('/custom/endpoint');
});

test('complex query should return correct query string', () => {
  const content = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  content
    .fetch('children')
    .byId('12345678-1234-1234-1234-123456789012')
    .withContentType('test')
    .withName('test');

  expect(content.getQueryString()).toBe(
    '?fetch=children:12345678-1234-1234-1234-123456789012&filter=contentType:test&filter=name:test',
  );
});

test('complex query should return correct query string with multiple filters', () => {
  const umbracoContent = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  umbracoContent
    .fetch('children')
    .byId('12345678-1234-1234-1234-123456789012')
    .withContentType('test')
    .withName('test')
    .withoutContentType('test2')
    .withoutName('test2');

  expect(umbracoContent.getQueryString()).toBe(
    '?fetch=children:12345678-1234-1234-1234-123456789012&filter=contentType:test&filter=name:test&filter=contentType:!test2&filter=name:!test2',
  );
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UmbracoContentDeliveryApi', () => {
  let api: UmbracoContentDeliveryApi;

  beforeEach(() => {
    api = new UmbracoContentDeliveryApi(API_KEY, baseURL);
    // Reset Axios mock before each test
    mockedAxios.get.mockReset();
  });

  it('should return data when the GET request is successful', async () => {
    // Mocking Axios to resolve with some data
    const responseData = { data: 'Some data' };
    mockedAxios.get.mockResolvedValue({ data: responseData });

    const result = await api.get();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(responseData);
  });

  it('should set correct headers', async () => {
    // Mocking Axios to resolve with some data
    const responseData = { data: 'Some data' };
    mockedAxios.get.mockResolvedValue({ data: responseData });

    api.withCulture('en-US');
    api.isPreview();

    const result = await api.get();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      baseURL + api.endpoint,
      {
        headers: {
          'Api-Key': API_KEY,
          'Accept-Language': 'en-US',
          'Preview': true,
        },
      },
    );
    expect(result).toEqual(responseData);
  });

  it('should handle the error when the GET request fails', async () => {
    // Mocking Axios to reject with an error
    const error = new Error('Network error');
    mockedAxios.get.mockRejectedValue(error);

    // You can either handle the error inside the method or catch it here
    await expect(api.get()).rejects.toEqual(error);
  });

  // Additional tests can be written to check headers, query parameters, etc.
});