import type { MemoryProviderOptions } from './isomporphic/memory'

export type MiddlewareFn<T> = (key: string, value: T) => T

/** a simple key/value persistence interface */
export interface PersistenceProviderImpl<T> {
  get: (key: string, defaultValue: T, middlewareFn?: MiddlewareFn<T>) => T
  set: (key: string, value: T, middlewareFn?: MiddlewareFn<T>) => void
  del: (key: string) => void
  clear: () => void
  backendApi: any
}

/** a simple, synchronous key/value persistence interface */
export interface PersistenceProviderImplSync<T> {
  get: (key: string, defaultValue: T, middlewareFn?: MiddlewareFn<T>) => T
  set: (key: string, value: T, middlewareFn?: MiddlewareFn<T>) => void
  del: (key: string) => void
  clear: () => void
  backendApi: any
}

export type PersistenceProvider = 'upstash' | 'session' | 'local' | 'memory'

export type PersistenceProviderOptions = MemoryProviderOptions

export { MemoryStorage, WebStorage } from './isomporphic/memory'
