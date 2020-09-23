import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer'

import models, { RootModel } from './models';

const store = init<RootModel>({
  plugins: [(immerPlugin as FixedimmerPlugin)<RootModel>()],
  models
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export default store;
