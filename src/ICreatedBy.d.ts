import { ICreatedBy as ICreatedByBase } from 'ptz-core-domain';
import { IProductForLog } from './IProduct';

export type ICreatedBy = ICreatedByBase<IProductForLog>;
