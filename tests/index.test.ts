import { UmbracoContentDeliveryApi } from '../src/index';

const baseURL = 'http://localhost:3000';
const umbracoContent = new UmbracoContentDeliveryApi(baseURL);

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
  const api = new UmbracoContentDeliveryApi(baseURL, '/custom/endpoint');
  expect(api.endpoint).toBe('/custom/endpoint');
});

test('complex query should return correct query string', () => {
  const content = new UmbracoContentDeliveryApi(baseURL);
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
  const umbracoContent = new UmbracoContentDeliveryApi(baseURL);
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
