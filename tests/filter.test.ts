import { UmbracoContentDeliveryApi } from '../src/index';
const baseURL = 'http://localhost:3000';

test('should filter by content type', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.withContentType('test');
  expect(api.queryParams.filter).toEqual(['contentType:test']);
});

test('should filter by name', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.withName('test');
  expect(api.queryParams.filter).toEqual(['name:test']);
});

test('should filter by content type and name', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.withContentType('test').withName('test');
  expect(api.queryParams.filter).toEqual(['contentType:test', 'name:test']);
});

test('should filter by content type and negate name', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.withContentType('test').withoutName('test');
  expect(api.queryParams.filter).toEqual(['contentType:test', 'name:!test']);
});

test('should filter by name and negate content type', () => {
  const api = new UmbracoContentDeliveryApi(baseURL);
  api.withName('test').withoutContentType('test');
  expect(api.queryParams.filter).toEqual(['name:test', 'contentType:!test']);
});
