import { UmbracoContentDeliveryApi } from '../src/index';
const baseURL = 'http://localhost:3000';
const RANDOM_GUID = '12345678-1234-1234-1234-123456789012';

test('should fetch children by id', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.fetch('children').byId(RANDOM_GUID);
  expect(api.getQueryString()).toBe('?fetch=children:' + RANDOM_GUID);
});

test('Should fetch by path give correct query string', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.fetch('children').byPath('something');
  expect(api.getQueryString()).toBe('?fetch=children:something');

  const api2 = new UmbracoContentDeliveryApi(baseURL);
  api2.fetch('ancestors').byPath('something');
  expect(api2.getQueryString()).toBe('?fetch=ancestors:something');

  const api3 = new UmbracoContentDeliveryApi(baseURL);
  api3.fetch('descendants').byPath('something');
  expect(api3.getQueryString()).toBe('?fetch=descendants:something');
});

test('fetch should throw error if path is a guid', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  expect(() => api.fetch('children').byPath(RANDOM_GUID)).toThrowError(
    'Path cannot be a guid',
  );
});

test('fetch should throw error if id is not a guid', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  expect(() => api.fetch('children').byId('1234')).toThrowError(
    'ID must be a guid',
  );
});
