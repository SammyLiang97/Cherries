import { Models } from '@rematch/core';

import config from './config.model';

export interface RootModel extends Models<RootModel> {
  // @ts-ignore 
  config: typeof config;
}

const models: RootModel = {
  config
};

export default models;
