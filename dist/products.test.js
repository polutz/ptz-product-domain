'use strict';

var _ptzAssert = require('ptz-assert');

var _index = require('./index');

describe('products', function () {
    it('allProducts has more than 2 test products', function () {
        (0, _ptzAssert.ok)(_index.products.allProducts.length > 2);
        _index.products.allProducts.forEach(function (product) {
            return (0, _ptzAssert.emptyArray)(product.errors);
        });
    });
});
//# sourceMappingURL=products.test.js.map
//# sourceMappingURL=products.test.js.map