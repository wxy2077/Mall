/**
 *
 *
 * 请求分类数据
 * */


import request from '@/utils/request'

// 获取侧边栏分类
export function getCategory() {
    return request(
        '/category',
        "GET",
    )
}


// 获取对应分类tabBar
export function getTabBar(data) {
    return request(
        '/category/tab',
        "GET",
        data
    )
}

// 获取对应分类tabBar
export function getGoods(data) {
    return request(
        '/category/goods',
        "POST",
        data
    )
}

