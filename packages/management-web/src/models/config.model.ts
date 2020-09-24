import { createModel } from '@rematch/core';

import { RootModel } from '.';
import { axios } from '../services';

interface ConfigState {
  configData: {
    [key: string]: CommonConfigData;
  }
}

export default createModel<RootModel>()({
  state: {
    configData: {
    }
  } as ConfigState,
  reducers: {
    setConfigData(state, payload: { key: string, data: CommonConfigData }) {
      const { key, data } = payload;
      state.configData[key] = data;
      return state;
    }
  },
  effects: (dispatch) => ({
    async fetchConfigDataByKey(payload: { key: string, version?: string }) {
      const { key } = payload;

      try {
        const res = await axios.get<ManagementResponse.Config.ManagementWeb.SideMenuRes>(`/api/config/${key}`).then(res => res.data);
        dispatch.config.setConfigData({
          key,
          data: res.data
        });
      } catch {}
    }
  })
});
