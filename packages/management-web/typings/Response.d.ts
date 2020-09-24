/* eslint-disable @typescript-eslint/no-unused-vars */
interface i18nName {
  'zh-CN': string;
  'en-US': string;
}

interface CommonConfigData<T = {}> {
  version: string;
  value: T;
}

namespace ManagementResponse {
  export interface CommonRes<T = {}> {
    success: boolean;
    code: number;
    msg: string;
    data: T;
  }

  export namespace Config {

    export namespace ManagementWeb {
      export interface HeaderMenuValue {
        menus: HeaderMenu[];
        defaultSelectKey: string;
        avatarURL: string;
      }
      export type HeaderMenuData = CommonConfigData<HeaderMenuValue>
      interface HeaderMenu {
        key: string;
        name: i18nName;
        path: string;
        icon?: any;
      }
      export type HeaderMenuRes = CommonRes<HeaderMenuData>;

      
      export interface SideMenuValue {
        menus: SideMenu[];
        defaultSelectedKey: string;
      }
      export type SideMenuData = CommonConfigData<SideMenuValue>;
      interface SideMenu {
        key: string;
        name: Name;
        path?: string;
        children?: SideMenu[];
      }

      export type SideMenuRes = CommonRes<SideMenuData>;
    }
  }
}
