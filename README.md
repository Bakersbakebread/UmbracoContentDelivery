# Umbraco Content Delivery Api - a fluent wrapper

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## Usage / example
```ts
// Import the UmbracoContentDeliveryApi class
import { UmbracoContentDeliveryApi } from './path-to-your-umbraco-api-file';

// Initialize your API with your API key, base URL, and optionally, the endpoint
const apiKey = 'your-api-key'; // Replace with your API key
const baseURL = 'https://your-umbraco-instance.com'; // Replace with your Umbraco instance URL
const umbracoApi = new UmbracoContentDeliveryApi(apiKey, baseURL);

// Construct the query using the fluent API
umbracoApi
  .fetch('children')                     // Fetching children items
  .withContentType('BlogPost')           // Filter by content type 'BlogPost'
  .withoutName('Archived')               // Exclude items with name 'Archived'
  .sortByUpdateDate()                    // Sorting by update date
  .skip(10)                              // Skip the first 10 items
  .take(5)                               // Take the next 5 items
  .expandProperty('author', 'summary')   // Expand 'author' and 'summary' properties
  .withCulture('en-US')                  // Specify the culture as 'en-US'
  .get()                                 // Execute the GET request
  .then(response => {
    // Handle the response
    console.log('Fetched items:', response);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching items:', error);
  });

// If you want to see the constructed query string
const queryString = umbracoApi.getQueryString();

>> console.log('Constructed Query String:', queryString);
>> ?fetch=children:BlogPost&filter=contentType:BlogPost,!name:Archived&sort=updateDate:asc&skip=10&take=5&expand=property:author,summary&culture=en-US
```

## License

Released under [MIT License](./LICENSE).
