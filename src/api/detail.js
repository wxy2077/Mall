/**
 *
 *
 * 请求详情页内容
 * */


import request from '@/utils/request'

// 获取首页信息
export function GoodsDetail(data) {
    return request(
        '/goods/detail',
        "POST",
        data,
    )
}


