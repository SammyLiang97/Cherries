import { createModel } from '@rematch/core';

import { RootModel } from '.';

interface ConfigState {
  configData: {
    [key: string]: {
      data: any,
      version: string;
    };
  }
}

const config = createModel<RootModel>()({
  state: {

  } as ConfigState,
});

export default config;
