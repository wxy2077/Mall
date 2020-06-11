

import request from '@/utils/request'

// 获取首页信息
export function GetBanner() {
    return request(
        '/home/banner',
        "get",
    )
}


// 获取首页 features 信息
export function GetFeatures() {
    return request(
        '/home/features',
        "get",
    )
}


// 获取首页 recommends 信息
export function GetRecommends() {
    return request(
        '/home/recommends',
        "get",
    )
}


// 获取首页 tab信息 信息
export function GetTab() {
    return request(
        '/home/tab',
        "get",
    )
}



