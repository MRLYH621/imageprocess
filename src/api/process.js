import request from "./request";
export function getAlgorithm() {
    return request({
        url: 'resAlgorithm',
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