import { RequestId } from './request-id';
import { RpcError, RpcErrorData } from './rpc-error';

interface Response<TResult> {
  jsonrpc: '2.0',
  id: RequestId
  result: TResult,
}

interface ErrorResponse<TError extends RpcError<RpcErrorData>> {
  jsonrpc: '2.0',
  id: RequestId,
  error: TError
}
