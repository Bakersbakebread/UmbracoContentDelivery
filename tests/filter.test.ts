import { UmbracoContentDeliveryApi } from '../src/index';
const baseURL = 'http://localhost:3000';
const API_KEY = '12345678-1234-1234-1234-123456789012';

test('should filter by content type', () => {
  const api = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  api.withContentType('test');
  expect(api.queryParams.filter).toEqual(['contentType:test']);
});

test('should filter by name', () => {
  const api = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  api.withName('test');
  expect(api.queryParams.filter).toEqual(['name:test']);
});

test('should filter by content type and name', () => {
  const api = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  api.withContentType('test').withName('test');
  expect(api.queryParams.filter).toEqual(['contentType:test', 'name:test']);
});

test('should filter by content type and negate name', () => {
  const api = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  api.withContentType('test').withoutName('test');
  expect(api.queryParams.filter).toEqual(['contentType:test', 'name:!test']);
});

test('should filter by name and negate content type', () => {
  const api = new UmbracoContentDeliveryApi(API_KEY, baseURL);
  api.withName('test').withoutContentType('test');
  expect(api.queryParams.filter).toEqual(['name:test', 'contentType:!test']);
});
