import { isPlainObject } from 'lodash';

const getLocale = (args: i18nName | string) => {
  if (isPlainObject(args)) {
    // ToDO: support i18n
    return (args as i18nName)['zh-CN'];
  } else {
    return args;
  }
}

export default getLocale;
