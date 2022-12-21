import request from "./request";
export function getData() {
    return request({
        url: 'name',
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