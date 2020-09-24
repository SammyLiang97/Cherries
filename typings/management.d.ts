/* eslint-disable @typescript-eslint/no-unused-vars */
export interface i18nName {
  'zh-CN': string;
  'en-US': string;
}

export namespace Config {
  interface CommonConfigData<T = {}> {
    version: string;
    value: T;
  }
  
  namespace ManagementWeb {
    export interface HeaderMenuValue {
      menus: HeaderMenu[];
      defaultSelectKey: string;
      avatarURL: string;
    }
    export type HeaderMenuData = CommonConfigData<HeaderMenuValue>
    interface HeaderMenu {
      key: string;
      name: i18nName;
      icon?: any;
    }

    export interface SideMenuValue {
      menus: SideMenu[];
      defaultSelectedKey: string;
    }
    export type SideMenuData = CommonConfigData<SideMenuValue>;
    interface SideMenu {
      key: string;
      name: i18nName;
      children?: SideMenu[];
    }
  }
}

export namespace Res {
  export interface CommonRes<T = {}> {
    success: boolean;
    code: number;
    msg: string;
    data: T;
  }

  export type HeaderMenuConfigRes = CommonRes<Config.ManagementWeb.HeaderMenuData>;
  export type SideMenuConfigRes = CommonRes<Config.ManagementWeb.SideMenuData>;
}
