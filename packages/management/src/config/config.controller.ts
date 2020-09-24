import { Controller, Get, Param } from '@nestjs/common';

@Controller('config')
export class ConfigController {
  @Get(':key')
  getConfigData(@Param('key') key) {


    /**
     * mock
     */
    console.log(key);
    switch (key) {
      case 'management-web-header-menu':
        return {
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
      case 'management-web-side-menu':
        return {
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
                  "path": null,
                  "children": [
                    {
                      "key": "management-web-header-menu",
                      "name": {
                        "zh-CN": "Header 菜单配置",
                        "en-US": "Header Menu Config"
                      },
                      "path": "management-web-header-menu"
                    },
                    {
                      "key": "management-web-side-menu",
                      "name": {
                        "zh-CN": "侧边栏菜单相关",
                        "en-US": "Side Menu Config"
                      },
                      "path": "management-web-side-menu"
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
              defaultSelectedKey: 'management-web-header-menu'
            },
            "version": "0.0.1"
          }
        }
      default:
        return {
          "success": false,
          "code": -1,
          "msg": "config data not found",
          "data": {
            version: '',
            value: {}
          }
        }
    }
  }

}
