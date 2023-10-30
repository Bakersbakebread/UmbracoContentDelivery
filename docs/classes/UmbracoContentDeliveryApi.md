[Umbraco Content Delivery Api](../README.md) / UmbracoContentDeliveryApi

# Class: UmbracoContentDeliveryApi

Represents a fluent API wrapper for Umbraco Content Delivery API.

## Implements

- `IUmbracoContentDeliveryApi`

## Table of contents

### Constructors

- [constructor](UmbracoContentDeliveryApi.md#constructor)

### Properties

- [baseURL](UmbracoContentDeliveryApi.md#baseurl)
- [endpoint](UmbracoContentDeliveryApi.md#endpoint)
- [queryParams](UmbracoContentDeliveryApi.md#queryparams)

### Methods

- [addFetch](UmbracoContentDeliveryApi.md#addfetch)
- [addFilter](UmbracoContentDeliveryApi.md#addfilter)
- [addSort](UmbracoContentDeliveryApi.md#addsort)
- [expandAll](UmbracoContentDeliveryApi.md#expandall)
- [expandProperty](UmbracoContentDeliveryApi.md#expandproperty)
- [fetch](UmbracoContentDeliveryApi.md#fetch)
- [get](UmbracoContentDeliveryApi.md#get)
- [getQueryString](UmbracoContentDeliveryApi.md#getquerystring)
- [item](UmbracoContentDeliveryApi.md#item)
- [skip](UmbracoContentDeliveryApi.md#skip)
- [sortByCreateDate](UmbracoContentDeliveryApi.md#sortbycreatedate)
- [sortByLevel](UmbracoContentDeliveryApi.md#sortbylevel)
- [sortByName](UmbracoContentDeliveryApi.md#sortbyname)
- [sortBySortOrder](UmbracoContentDeliveryApi.md#sortbysortorder)
- [sortByUpdateDate](UmbracoContentDeliveryApi.md#sortbyupdatedate)
- [take](UmbracoContentDeliveryApi.md#take)
- [withContentType](UmbracoContentDeliveryApi.md#withcontenttype)
- [withName](UmbracoContentDeliveryApi.md#withname)
- [withoutContentType](UmbracoContentDeliveryApi.md#withoutcontenttype)
- [withoutName](UmbracoContentDeliveryApi.md#withoutname)

## Constructors

### constructor

• **new UmbracoContentDeliveryApi**(`baseURL`, `endpoint?`)

Initializes a new instance of the UmbracoContentDeliveryApi class.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `baseURL` | `string` | `undefined` | The base URL of the Umbraco instance. |
| `endpoint` | `string` | `'/umbraco/delivery/api/v1/content'` | The endpoint of the Umbraco Content Delivery API. |

#### Defined in

[index.ts:25](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L25)

## Properties

### baseURL

• **baseURL**: `string`

#### Defined in

[index.ts:16](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L16)

___

### endpoint

• **endpoint**: `string`

#### Defined in

[index.ts:17](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L17)

___

### queryParams

• **queryParams**: `any`

#### Implementation of

IUmbracoContentDeliveryApi.queryParams

#### Defined in

[index.ts:18](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L18)

## Methods

### addFetch

▸ **addFetch**(`selector`, `id`): `IUmbracoContentDeliveryApi`

Adds a fetch parameter to the query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | ``"ancestors"`` \| ``"children"`` \| ``"descendants"`` | The selector to fetch. |
| `id` | `string` | The ID of the node to fetch. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.addFetch

#### Defined in

[index.ts:48](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L48)

___

### addFilter

▸ **addFilter**(`type`, `value`, `negate`): `IUmbracoContentDeliveryApi`

Adds a filter to the query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"contentType"`` \| ``"name"`` | The type of filter to add. |
| `value` | `string` | The value of the filter. |
| `negate` | `boolean` | Whether to negate the filter or not. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Defined in

[index.ts:67](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L67)

___

### addSort

▸ **addSort**(`field`, `order`): `IUmbracoContentDeliveryApi`

Adds a sort parameter to the query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | The field to sort by. |
| `order` | ``"asc"`` \| ``"desc"`` | The order to sort in. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.addSort

#### Defined in

[index.ts:165](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L165)

___

### expandAll

▸ **expandAll**(): `IUmbracoContentDeliveryApi`

Adds an expand parameter to the query string to expand all properties.

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.expandAll

#### Defined in

[index.ts:214](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L214)

___

### expandProperty

▸ **expandProperty**(`...propertyAliases`): `IUmbracoContentDeliveryApi`

Adds an expand parameter to the query string to expand a specific property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...propertyAliases` | `string`[] | The aliases of the properties to expand. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.expandProperty

#### Defined in

[index.ts:205](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L205)

___

### fetch

▸ **fetch**(`selector`): `IFetchSelectorAction`

Creates a new instance of the FetchSelectorAction class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | ``"ancestors"`` \| ``"children"`` \| ``"descendants"`` | The selector to fetch. |

#### Returns

`IFetchSelectorAction`

A new instance of the FetchSelectorAction class.

#### Implementation of

IUmbracoContentDeliveryApi.fetch

#### Defined in

[index.ts:36](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L36)

___

### get

▸ **get**(): `Promise`<`any`\>

Sends a GET request to the Umbraco Content Delivery API with the current query parameters.

#### Returns

`Promise`<`any`\>

A Promise that resolves to the response data or rejects with an error.

#### Implementation of

IUmbracoContentDeliveryApi.get

#### Defined in

[index.ts:231](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L231)

___

### getQueryString

▸ **getQueryString**(): `string`

Returns the query string representation of the current set of query parameters.

#### Returns

`string`

A string representing the query parameters.

#### Implementation of

IUmbracoContentDeliveryApi.getQueryString

#### Defined in

[index.ts:245](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L245)

___

### item

▸ **item**(): `IUmbracoContentDeliveryApiItem`

Creates a new instance of the UmbracoContentDeliveryApiItem class.

#### Returns

`IUmbracoContentDeliveryApiItem`

A new instance of the UmbracoContentDeliveryApiItem class.

#### Implementation of

IUmbracoContentDeliveryApi.item

#### Defined in

[index.ts:223](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L223)

___

### skip

▸ **skip**(`count`): `IUmbracoContentDeliveryApi`

Adds a skip parameter to the query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The number of nodes to skip. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.skip

#### Defined in

[index.ts:181](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L181)

___

### sortByCreateDate

▸ **sortByCreateDate**(): `ISortAction`

Creates a new instance of the SortAction class to sort by create date.

#### Returns

`ISortAction`

A new instance of the SortAction class.

#### Implementation of

IUmbracoContentDeliveryApi.sortByCreateDate

#### Defined in

[index.ts:131](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L131)

___

### sortByLevel

▸ **sortByLevel**(): `ISortAction`

Creates a new instance of the SortAction class to sort by level.

#### Returns

`ISortAction`

A new instance of the SortAction class.

#### Implementation of

IUmbracoContentDeliveryApi.sortByLevel

#### Defined in

[index.ts:139](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L139)

___

### sortByName

▸ **sortByName**(): `ISortAction`

Creates a new instance of the SortAction class to sort by name.

#### Returns

`ISortAction`

A new instance of the SortAction class.

#### Implementation of

IUmbracoContentDeliveryApi.sortByName

#### Defined in

[index.ts:123](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L123)

___

### sortBySortOrder

▸ **sortBySortOrder**(): `ISortAction`

Creates a new instance of the SortAction class to sort by sort order.

#### Returns

`ISortAction`

A new instance of the SortAction class.

#### Implementation of

IUmbracoContentDeliveryApi.sortBySortOrder

#### Defined in

[index.ts:147](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L147)

___

### sortByUpdateDate

▸ **sortByUpdateDate**(): `ISortAction`

Creates a new instance of the SortAction class to sort by update date.

#### Returns

`ISortAction`

A new instance of the SortAction class.

#### Implementation of

IUmbracoContentDeliveryApi.sortByUpdateDate

#### Defined in

[index.ts:155](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L155)

___

### take

▸ **take**(`count`): `IUmbracoContentDeliveryApi`

Adds a take parameter to the query string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | The number of nodes to take. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.take

#### Defined in

[index.ts:191](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L191)

___

### withContentType

▸ **withContentType**(`value`): `IUmbracoContentDeliveryApi`

Adds a filter to the query string to include nodes with a specific content type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The content type to include. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.withContentType

#### Defined in

[index.ts:84](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L84)

___

### withName

▸ **withName**(`name`): `IUmbracoContentDeliveryApi`

Adds a filter to the query string to include nodes with a specific name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the nodes to include. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.withName

#### Defined in

[index.ts:93](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L93)

___

### withoutContentType

▸ **withoutContentType**(`value`): `IUmbracoContentDeliveryApi`

Adds a filter to the query string to exclude nodes with a specific content type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The content type to exclude. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.withoutContentType

#### Defined in

[index.ts:102](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L102)

___

### withoutName

▸ **withoutName**(`name`): `IUmbracoContentDeliveryApi`

Adds a filter to the query string to exclude nodes with a specific name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the nodes to exclude. |

#### Returns

`IUmbracoContentDeliveryApi`

The current instance of the UmbracoContentDeliveryApi class.

#### Implementation of

IUmbracoContentDeliveryApi.withoutName

#### Defined in

[index.ts:111](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L111)
