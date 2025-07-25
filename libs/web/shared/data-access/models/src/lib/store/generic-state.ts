export type GenericStoreStatus = 'pending' | 'loading' | 'success' | 'error';

export interface GenericState<T> {
  data: T | null;
  status: GenericStoreStatus;
  error: string | null;
}


// Note: Could be optimized in future iterations