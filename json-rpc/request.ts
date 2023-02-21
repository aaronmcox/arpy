import { RequestId } from './request-id';

export type RequestParams = object | unknown[];

export interface Request<TParams extends RequestParams> {
  jsonrpc: '2.0',
  method: string,
  params:  TParams,
  id: RequestId
}
