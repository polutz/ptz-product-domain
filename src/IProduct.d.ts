import { IEntityBase, IEntityBaseArgs } from 'ptz-core-domain';

export interface IProduct extends IEntityBase<IProduct> {
    name: string;
    price: number;
    category: string;

    update(product: IProduct): IProduct;
}

export interface IProductArgs extends IEntityBaseArgs<IProductArgs> {
    name: string;
    price: number;
    category: string;
}

export interface IProductForLog {
    id: string;
    name: string;
    price: number;
    category: string;
}
