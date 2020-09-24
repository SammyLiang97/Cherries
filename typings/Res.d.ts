declare namespace Res {
  export interface CommonRes<T = {}> {
    success: boolean;
    code: number;
    msg: string;
    data: T;
  }

  export type HeaderMenuConfigRes = CommonRes<Config.ManagementWeb.HeaderMenuData>;
  export type SideMenuConfigRes = CommonRes<Config.ManagementWeb.SideMenuData>;
}
