import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('config')
export class ConfigController {
  @Get(':key')
  getConfigData(@Param('key') key) {


    /**
     * mock
     */
    switch (key) {
      case 'management-web-header-menu':
        const headMenuRes: Res.HeaderMenuConfigRes = {
          "success": true,
          "code": 0,
          "msg": "",
          "data": {
            "value": {
              "menus": [
                {
                  "key": "config",
                  "name": {
                    "zh-CN": "配置平台",
                    "en-US": "Configure platform"
                  },
                  "icon": null
                },
                {
                  "key": "settings",
                  "name": {
                    "zh-CN": "基础设置",
                    "en-US": "Basic Settings"
                  },
                  "icon": null
                }
              ],
              "defaultSelectKey": 'config',
              "avatarURL": "https://sf1-dycdn-tos.pstatp.com/obj/eden-cn/nuhpspozlo/cherries/default_avatar.jpg",
            },
            "version": "0.0.1"
          }
        }
        return headMenuRes;
      case 'management-web-side-menu':
        const sideMenuRes: Res.SideMenuConfigRes = {
          "success": true,
          "code": 0,
          "msg": "",
          "data": {
            "value": {
              "menus": [
                {
                  "key": "management-web",
                  "name": {
                    "zh-CN": "Management Web",
                    "en-US": "Management Web"
                  },
                  "children": [
                    {
                      "key": "management-web-header-menu",
                      "name": {
                        "zh-CN": "Header 菜单配置",
                        "en-US": "Header Menu Config"
                      },
                    },
                    {
                      "key": "management-web-side-menu",
                      "name": {
                        "zh-CN": "侧边栏菜单相关",
                        "en-US": "Side Menu Config"
                      },
                    }
                  ]
                },
                {
                  "key": "homepage-web",
                  "name": {
                    "zh-CN": "Homepage Web",
                    "en-US": "Homepage Web"
                  },
                }
              ],
              "defaultSelectedKey": 'management-web-header-menu'
            },
            "version": "0.0.1"
          }
        };
        return sideMenuRes;
      default:
        const commonRes: Res.CommonRes = {
          "success": false,
          "code": -1,
          "msg": "config data not found",
          "data": {
            version: '',
            value: {}
          }
        }
        return commonRes;
    }
  }

  @Put(':key')
  updateConfigData(@Param('key') key, @Body('data') data) {
    const res: Res.CommonConfigRes = {
      success: true,
      code: 0,
      msg: "",
      data: {
        version: '0.0.2',
        value: JSON.parse(data)
      }
    };
    
    return res;
  }

}
