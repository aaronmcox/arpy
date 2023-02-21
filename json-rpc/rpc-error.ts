import { ErrorCode } from './error-code';

export type RpcErrorData = string | number | boolean | unknown[] | object | null;

export interface RpcError<TData extends RpcErrorData> {
  code: ErrorCode,
  message: string,
  data: TData
}

