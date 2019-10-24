import axios from 'axios'
export default function ajax(url = '', params = {}, type = 'GET') {
  let promise
  return new Promise((resolve, reject) => {
    if (type === 'GET') {
      let paramsStr = ''
      Object.keys(params).map(key => {
        paramsStr += key + '=' + params[key] + '&'
      })

      // 去掉拼接在url中参数的最后一个 &
      paramsStr && (paramsStr = paramsStr.substring(0, paramsStr.length-1))

      // 组装GET请求中的ual
      url = url + '?' + paramsStr

      // 返回axios返回的promise
      promise = axios.get(url)

    } else if (type === 'POST') {
      promise = axios.post(params)
    }

    promise.then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}