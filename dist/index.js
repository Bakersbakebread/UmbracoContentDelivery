/*!
 * umbraco-content-delivery v0.0.0
 * (c) Sean Thorne
 * Released under the MIT License.
 */

'use strict';

var axios = require('axios');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var SortAction = /** @class */ (function () {
    function SortAction(baseQuery, field) {
        this.baseQuery = baseQuery;
        this.field = field;
    }
    SortAction.prototype.ascending = function () {
        this.baseQuery.addSort(this.field, 'asc');
        return this.baseQuery;
    };
    SortAction.prototype.descending = function () {
        this.baseQuery.addSort(this.field, 'desc');
        return this.baseQuery;
    };
    return SortAction;
}());

var FetchSelectorAction = /** @class */ (function () {
    function FetchSelectorAction(baseQuery, selector) {
        this.baseQuery = baseQuery;
        this.selector = selector;
    }
    FetchSelectorAction.prototype.byId = function (id) {
        // if ID is not a guid, throw error
        if (!id.match(/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i)) {
            throw new Error('ID must be a guid');
        }
        this.baseQuery.addFetch(this.selector, id);
        return this.baseQuery;
    };
    FetchSelectorAction.prototype.byPath = function (path) {
        // check path is not a guid
        if (path.match(/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i)) {
            throw new Error('Path cannot be a guid');
        }
        // if path starts with a / remove it
        if (path.startsWith('/')) {
            path = path.slice(1);
        }
        this.baseQuery.addFetch(this.selector, path);
        return this.baseQuery;
    };
    return FetchSelectorAction;
}());

function toQueryString(queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var parts = [];
    var _loop_1 = function (key) {
        if (Array.isArray(queryParams[key])) {
            parts.push.apply(parts, queryParams[key].map(function (value) { return "".concat(key, "=").concat(value); }));
        }
        else if (queryParams[key] !== undefined) {
            parts.push("".concat(key, "=").concat(queryParams[key]));
        }
    };
    for (var key in queryParams) {
        _loop_1(key);
    }
    return parts.length ? "?".concat(parts.join('&')) : '';
}

var UmbracoContentDeliveryApi = /** @class */ (function () {
    function UmbracoContentDeliveryApi(baseURL, endpoint) {
        if (endpoint === void 0) { endpoint = null; }
        this.baseURL = baseURL;
        this.endpoint = endpoint !== null && endpoint !== void 0 ? endpoint : '/umbraco/delivery/api/v1/content';
        this.queryParams = {};
    }
    UmbracoContentDeliveryApi.prototype.fetch = function (selector) {
        return new FetchSelectorAction(this, selector);
    };
    UmbracoContentDeliveryApi.prototype.addFetch = function (selector, id) {
        this.queryParams.fetch = "".concat(selector, ":").concat(id);
        return this;
    };
    //================================================================================================
    // FILTERING
    //================================================================================================
    UmbracoContentDeliveryApi.prototype.withContentType = function (value) {
        return this.addFilter('contentType', value, false);
    };
    UmbracoContentDeliveryApi.prototype.withName = function (name) {
        return this.addFilter('name', name, false);
    };
    UmbracoContentDeliveryApi.prototype.withoutContentType = function (value) {
        return this.addFilter('contentType', value, true);
    };
    UmbracoContentDeliveryApi.prototype.withoutName = function (name) {
        return this.addFilter('name', name, true);
    };
    UmbracoContentDeliveryApi.prototype.addFilter = function (type, value, negate) {
        var filterValue = negate ? "!".concat(value) : value;
        this.queryParams.filter = this.queryParams.filter
            ? __spreadArray(__spreadArray([], this.queryParams.filter, true), ["".concat(type, ":").concat(filterValue)], false) : ["".concat(type, ":").concat(filterValue)];
        return this;
    };
    //================================================================================================
    // SORTING
    //================================================================================================
    UmbracoContentDeliveryApi.prototype.sortByName = function () {
        return new SortAction(this, 'name');
    };
    UmbracoContentDeliveryApi.prototype.sortByCreateDate = function () {
        return new SortAction(this, 'createDate');
    };
    UmbracoContentDeliveryApi.prototype.sortByLevel = function () {
        return new SortAction(this, 'level');
    };
    UmbracoContentDeliveryApi.prototype.sortBySortOrder = function () {
        return new SortAction(this, 'sortOrder');
    };
    UmbracoContentDeliveryApi.prototype.sortByUpdateDate = function () {
        return new SortAction(this, 'updateDate');
    };
    UmbracoContentDeliveryApi.prototype.addSort = function (field, order) {
        this.queryParams.sort = this.queryParams.sort
            ? __spreadArray(__spreadArray([], this.queryParams.sort, true), ["".concat(field, ":").concat(order)], false) : ["".concat(field, ":").concat(order)];
        return this;
    };
    //================================================================================================
    // PAGING
    //================================================================================================
    UmbracoContentDeliveryApi.prototype.skip = function (count) {
        this.queryParams.skip = count;
        return this;
    };
    UmbracoContentDeliveryApi.prototype.take = function (count) {
        this.queryParams.take = count;
        return this;
    };
    //================================================================================================
    // EXPANDING
    //================================================================================================
    UmbracoContentDeliveryApi.prototype.expandProperty = function () {
        var propertyAliases = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertyAliases[_i] = arguments[_i];
        }
        this.queryParams.expand = "property:".concat(propertyAliases.join(','));
        return this;
    };
    UmbracoContentDeliveryApi.prototype.expandAll = function () {
        this.queryParams.expand = 'all';
        return this;
    };
    UmbracoContentDeliveryApi.prototype.item = function () {
        return new UmbracoContentDeliveryApiItem(this.baseURL, this.endpoint);
    };
    UmbracoContentDeliveryApi.prototype.get = function () {
        var url = "".concat(this.baseURL).concat(this.endpoint).concat(toQueryString(this.queryParams));
        return axios
            .get(url)
            .then(function (response) { return response.data; })
            .catch(function (error) { return error; });
    };
    /**
     * Returns the query string representation of the current set of query parameters.
     * @returns A string representing the query parameters.
     */
    UmbracoContentDeliveryApi.prototype.getQueryString = function () {
        return toQueryString(this.queryParams);
    };
    return UmbracoContentDeliveryApi;
}());
var UmbracoContentDeliveryApiItem = /** @class */ (function () {
    function UmbracoContentDeliveryApiItem(baseURL, endpoint) {
        if (endpoint === void 0) { endpoint = null; }
        this.baseURL = baseURL;
        this.endpoint = endpoint !== null && endpoint !== void 0 ? endpoint : '/umbraco/delivery/api/v1/content';
        this.queryParams = {};
    }
    UmbracoContentDeliveryApiItem.prototype.expandProperty = function () {
        var propertyAliases = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            propertyAliases[_i] = arguments[_i];
        }
        this.queryParams.expand = "property:".concat(propertyAliases.join(','));
        return this;
    };
    UmbracoContentDeliveryApiItem.prototype.expandAll = function () {
        this.queryParams.expand = 'all';
        return this;
    };
    UmbracoContentDeliveryApiItem.prototype.byId = function () {
        var id = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            id[_i] = arguments[_i];
        }
        this.endpoint = "/umbraco/delivery/api/v1/content/item/".concat(id);
        return this;
    };
    UmbracoContentDeliveryApiItem.prototype.byPath = function (path) {
        if (path.match(/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i)) {
            throw new Error('Path cannot be a guid');
        }
        this.endpoint = "/umbraco/delivery/api/v1/content/item/".concat(path);
        return this;
    };
    UmbracoContentDeliveryApiItem.prototype.get = function () {
        var url = "".concat(this.baseURL).concat(this.endpoint).concat(toQueryString(this.queryParams));
        return axios
            .get(url)
            .then(function (response) { return response.data; })
            .catch(function (error) { return error; });
    };
    UmbracoContentDeliveryApiItem.prototype.getURL = function () {
        return "".concat(this.baseURL).concat(this.endpoint).concat(toQueryString(this.queryParams));
    };
    return UmbracoContentDeliveryApiItem;
}());

exports.UmbracoContentDeliveryApi = UmbracoContentDeliveryApi;
exports.UmbracoContentDeliveryApiItem = UmbracoContentDeliveryApiItem;
//# sourceMappingURL=index.js.map
