declare namespace Res {
  export interface CommonRes<T = {}> {
    success: boolean;
    code: number;
    msg: string;
    data: T;
  }

  export interface CommonConfigRes<T = {}> extends CommonRes {
    data: Config.CommonConfigData<T>;
  }

  export type HeaderMenuConfigRes = CommonConfigRes<Config.ManagementWeb.HeaderMenuValue>;
  export type SideMenuConfigRes = CommonConfigRes<Config.ManagementWeb.SideMenuValue>;
}
