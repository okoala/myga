export interface MapT<T> {
  [key: string]: T;
}

export type VoidFunction = () => void;
export type OneArgFunction = (data?: any) => void;
export type OneArgFunctionT<T> = (data: T) => void;

export interface IBridgeParams {
  [key: string]: any;
}

export interface IBridgeError {
  errorMessage?: string;

  [key: string]: any;
}

type IBridgeCallback = (res: any) => void;

export type ICallBridgeImpl = (
  bridgeName: string,
  params?: IBridgeParams,
  callback?: IBridgeCallback,
) => void;
