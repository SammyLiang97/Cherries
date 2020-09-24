import { createModel } from '@rematch/core';

import { RootModel } from '.';
import { axios } from '../services';

interface ConfigState {
  configData: {
    [key: string]: Config.CommonConfigData;
  }
}

export default createModel<RootModel>()({
  state: {
    configData: {
    }
  } as ConfigState,
  reducers: {
    setConfigData(state, payload: { key: string, data: Config.CommonConfigData }) {
      const { key, data } = payload;
      state.configData[key] = data;
      return state;
    }
  },
  effects: (dispatch) => ({
    async fetchConfigDataByKey<T>(payload: { key: string, version?: string }) {
      const { key } = payload;

      try {
        const res = await axios.get<Res.CommonRes<Config.CommonConfigData<T>>>(`/api/config/${key}`).then(res => res.data);
        dispatch.config.setConfigData({
          key,
          data: res.data
        });
      } catch {}
    }
  })
});
