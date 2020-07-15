import axios from 'axios'

export const fetchData = (fn) => {
  axios('http://api.fanyi.baidu.com/api/trans/vip/translate').then((res) => {
    fn(res.data)
  })
}

export const fetchData2 = (fn) => {
  return axios('http://api.fanyi.baidu.com/api/trans/vip/translate')
}