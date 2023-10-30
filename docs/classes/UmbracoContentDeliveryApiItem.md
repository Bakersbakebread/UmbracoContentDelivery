[Umbraco Content Delivery Api](../README.md) / UmbracoContentDeliveryApiItem

# Class: UmbracoContentDeliveryApiItem

## Implements

- `IUmbracoContentDeliveryApiItem`

## Table of contents

### Constructors

- [constructor](UmbracoContentDeliveryApiItem.md#constructor)

### Properties

- [baseURL](UmbracoContentDeliveryApiItem.md#baseurl)
- [endpoint](UmbracoContentDeliveryApiItem.md#endpoint)
- [queryParams](UmbracoContentDeliveryApiItem.md#queryparams)

### Methods

- [byId](UmbracoContentDeliveryApiItem.md#byid)
- [byPath](UmbracoContentDeliveryApiItem.md#bypath)
- [expandAll](UmbracoContentDeliveryApiItem.md#expandall)
- [expandProperty](UmbracoContentDeliveryApiItem.md#expandproperty)
- [get](UmbracoContentDeliveryApiItem.md#get)
- [getURL](UmbracoContentDeliveryApiItem.md#geturl)

## Constructors

### constructor

• **new UmbracoContentDeliveryApiItem**(`baseURL`, `endpoint?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `baseURL` | `string` | `undefined` |
| `endpoint` | ``null`` \| `string` | `null` |

#### Defined in

[index.ts:256](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L256)

## Properties

### baseURL

• `Private` **baseURL**: `string`

#### Defined in

[index.ts:252](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L252)

___

### endpoint

• `Private` **endpoint**: `string`

#### Defined in

[index.ts:253](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L253)

___

### queryParams

• `Private` **queryParams**: `any`

#### Defined in

[index.ts:254](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L254)

## Methods

### byId

▸ **byId**(`...id`): `IUmbracoContentDeliveryApiItem`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...id` | `string`[] |

#### Returns

`IUmbracoContentDeliveryApiItem`

#### Implementation of

IUmbracoContentDeliveryApiItem.byId

#### Defined in

[index.ts:271](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L271)

___

### byPath

▸ **byPath**(`path`): `IUmbracoContentDeliveryApiItem`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`IUmbracoContentDeliveryApiItem`

#### Implementation of

IUmbracoContentDeliveryApiItem.byPath

#### Defined in

[index.ts:276](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L276)

___

### expandAll

▸ **expandAll**(): `IUmbracoContentDeliveryApiItem`

#### Returns

`IUmbracoContentDeliveryApiItem`

#### Implementation of

IUmbracoContentDeliveryApiItem.expandAll

#### Defined in

[index.ts:266](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L266)

___

### expandProperty

▸ **expandProperty**(`...propertyAliases`): `IUmbracoContentDeliveryApiItem`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...propertyAliases` | `string`[] |

#### Returns

`IUmbracoContentDeliveryApiItem`

#### Implementation of

IUmbracoContentDeliveryApiItem.expandProperty

#### Defined in

[index.ts:262](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L262)

___

### get

▸ **get**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Implementation of

IUmbracoContentDeliveryApiItem.get

#### Defined in

[index.ts:284](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L284)

___

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Defined in

[index.ts:294](https://github.com/VitorLuizC/typescript-library-boilerplate/blob/d3bf748/src/index.ts#L294)
