import { ICallBridgeImpl } from './interface';
import { createDocProxy } from './requests/doc';
import { createTocProxy } from './requests/toc';

export function createRequestBridge(impl: ICallBridgeImpl) {
  return {
    toc: createTocProxy(impl),
    doc: createDocProxy(impl),
  };
}
