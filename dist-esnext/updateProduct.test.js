import * as assert from 'ptz-assert';
import * as Product from './index';
import { updateProduct } from './updateProduct';
describe('updateProduct', () => {
    var dbProduct, newProduct, updatedProduct;
    beforeEach(() => {
        dbProduct = Product.createProduct({
            id: 'OldId',
            name: 'Old Name',
            price: 50,
            category: 'Old Category',
            createdBy: {
                dtCreated: new Date('1992-06-28'),
                ip: '192.168.0.1'
            }
        });
        newProduct = Product.createProduct({
            id: 'NewId',
            name: 'New Name',
            price: 10,
            category: 'New Category',
            createdBy: {
                dtCreated: new Date('1992-01-07'),
                ip: '192.168.0.1',
                user: {
                    userName: 'AlanMarcell',
                    displayName: 'Alan Marcell',
                    email: 'alanmarcell@live.com',
                    id: 'New_Id'
                }
            }
        });
        updatedProduct = updateProduct(dbProduct, newProduct);
    });
    it('Should not update id', () => {
        assert.notEqual(newProduct.id, updatedProduct.id);
    });
    it('Should not update createdBy', () => {
        assert.notEqual(newProduct.createdBy, updatedProduct.createdBy);
    });
    it('Should update dtChanged', () => {
        newProduct.dtChanged = new Date('1992-06-28');
        assert.ok(updatedProduct.dtChanged);
        assert.ok(updatedProduct.dtChanged > newProduct.dtChanged);
    });
    it('Should add dtChanged', () => {
        newProduct.dtChanged = null;
        assert.ok(updatedProduct.dtChanged);
    });
    it('Should update name', () => {
        assert.equal(newProduct.name, updatedProduct.name);
    });
    it('Should update price', () => {
        assert.equal(newProduct.price, updatedProduct.price);
    });
    it('Should update category', () => {
        assert.equal(newProduct.category, updatedProduct.category);
    });
});
//# sourceMappingURL=updateProduct.test.js.map