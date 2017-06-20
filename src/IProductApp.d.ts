import { ICreatedBy } from 'ptz-core-domain';
import { ILog } from 'ptz-log';
import { IError } from 'ptz-validations';
import { IAppFuncArgs } from './IAppFuncArgs';
import { IProduct, IProductArgs } from './IProduct';
import { IProductRepository } from './IProductRepository';

export interface ISaveProductArgs extends IAppFuncArgs {
    productArgs: IProductArgs;
}

export interface IDeleteProductArgs extends IAppFuncArgs {
    id: string;
}

export interface IFindProductsArgs extends IAppFuncArgs {
    query: any;
    options: { limit: number };
}

export interface IProductApp {
    saveProduct(args: ISaveProductArgs): Promise<IProduct>;
    findProducts(args: IFindProductsArgs): Promise<IProduct[]>;
    deleteProduct(args: IDeleteProductArgs): Promise<boolean>;

    seed();
}

export interface IProductAppArgs {
    productRepository: IProductRepository;
    log?: ILog;
}
