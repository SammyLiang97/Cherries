declare namespace Config {
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
