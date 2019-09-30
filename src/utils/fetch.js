import axios from 'axios'
import Vue from 'vue'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000*10, // request timeout
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

// request interceptor
// 记录当前页面请求数量
let loadingNum = 0;
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // 计算接口数量
    loadingNum ++;
    Vue.$zhenlv.loading.show({
      text: '正在加载'
    })
    return config
  },
  error => {
    setTimeout(() => {
      loadingNum = 0;
      Vue.$zhenlv.loading.hide();
      Vue.$zhenlv.toast.show('加载超时')
    },3000)
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    loadingNum--;
    if(!loadingNum){
      Vue.$zhenlv.loading.hide()
    }
    return response.data
  },
  error => {
    console.log(error)
    setTimeout(() => {
      loadingNum = 0;
      Vue.$zhenlv.loading.hide()
      Vue.$zhenlv.toast.show('请求失败')
    },1000)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
  var config = err.config;
  // If config does not exist or the retry option is not set, reject
  if(!config || !config.retry) return Promise.reject(err);
  
  // Set the variable for keeping track of the retry count
  config.__retryCount = config.__retryCount || 0;
  
  // Check if we've maxed out the total number of retries
  if(config.__retryCount >= config.retry) {
      // Reject with the error
      return Promise.reject(err);
  }
  
  // Increase the retry count
  config.__retryCount += 1;
  
  // Create new promise to handle exponential backoff
  var backoff = new Promise(function(resolve) {
      setTimeout(function() {
          resolve();
      }, config.retryDelay || 1);
  });
  
  // Return the promise in which recalls axios to retry the request
  return backoff.then(function() {
      return axios(config);
  });
});

export default service
