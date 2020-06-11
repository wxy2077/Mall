/**
*
* 封装url路由前缀
* 后面扩展版本区分 可以更改这里
* */

import { appConfig } from '@/config'

export default function concatUrl(e) {
    let url;
    url = `${appConfig[process.env.NODE_ENV]}/api/v1/mall${e}`;
    return url;
}
