import { IBaseRepository } from 'ptz-core-domain';
import { IProduct } from './IProduct';

export interface IProductRepository extends IBaseRepository<IProduct> {
    getByProductNameOrId(productNameOrId: string): Promise<IProduct>;
    getOtherProductsWithSameName(product: IProduct): Promise<IProduct[]>;
}
