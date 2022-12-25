import request from "./service";
export function getData() {
    return request({
        url: 'name',
        method: 'get'
    })
}
export function test() {
    return request({
        url: 'test',
        method: 'get'
    })
}
export function sendImage(data) {
    return request({
        url: 'sendImage',
        method: 'post',
        data
    })
}