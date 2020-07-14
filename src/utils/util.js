import moment from 'moment'
import 'moment/locale/zh-cn'

const getCurrentTime = () => {
  let keep = ''
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  keep = y + '' + m + '' + d + '' + h + '' + f + '' + s
  return keep // 20160614134947
}

const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}

const dateFormat = (date, format = 'MMM Do') => {
  moment.locale('zh-cn')
  return moment(date).format(format)
}

const weekFormat = (date, format = 'dddd') => {
  moment.locale('zh-cn')
  return moment(date).format(format)
}

const hourFormat = (date, format = 'h:mm') => {
  moment.locale('zh-cn')
  return moment(date).format(format)
}

const niceNickname = (nickname) => {
  // eslint-disable-next-line camelcase
  let nickname_length = nickname.length
  // eslint-disable-next-line camelcase
  switch (nickname_length) {
    case 1:
      break
    case 2:
      nickname = nickname.substring(0, 1) + '*'
    // eslint-disable-next-line no-fallthrough
    default:
      nickname = nickname.substring(0, 1) + '*'.repeat(nickname.length - 2) + nickname.substr(nickname.length - 1)
      break
  }
  return nickname
}

const formatZero = (zero) => {
  return zero === '0.00' ? 0 : zero
}

const success = (title, duration = 500) => {
  setTimeout(() => {
    wx.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration
    })
  }, 300)
  if (duration > 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, duration)
    })
  }
}

/**
 * 弹出确认窗口
 */
// eslint-disable-next-line no-unused-vars
const confirm = (text, payload = {}, title = '提示') => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: text,
      showCancel: true,
      success: res => {
        if (res.confirm) {
          resolve(payload)
        } else if (res.cancel) {
          reject(payload)
        }
      },
      fail: res => {
        reject(payload)
      }
    })
  })
}

// eslint-disable-next-line no-unused-vars
const toast = (title, onHide, icon = 'success') => {
  setTimeout(() => {
    wx.showToast({
      title: title,
      icon: icon,
      mask: true,
      duration: 500
    })
  }, 300)

  // 隐藏结束回调
  if (onHide) {
    setTimeout(() => {
      onHide()
    }, 500)
  }
}

/**
 * 警告框
 */
// eslint-disable-next-line no-unused-vars
const alert = (title) => {
  wx.showToast({
    title: title,
    image: '/assets/images/alert.png',
    mask: true,
    duration: 1500
  })
}

/**
 * 错误框
 */
// eslint-disable-next-line no-unused-vars
const error = (title, onHide) => {
  wx.showToast({
    title: title,
    image: '/assets/images/error.png',
    mask: true,
    duration: 500
  })
  // 隐藏结束回调
  if (onHide) {
    setTimeout(() => {
      onHide()
    }, 500)
  }
}

/**
 * 弹出加载提示
 */
// eslint-disable-next-line no-unused-vars
const loading = (title = '加载中') => {
  if (this.isLoading) {
    return
  }
  this.isLoading = true
  wx.showLoading({
    title: title,
    mask: true
  })
}

/**
 * 加载完毕
 */
// eslint-disable-next-line no-unused-vars
const loaded = () => {
  if (this.isLoading) {
    this.isLoading = false
    wx.hideLoading()
  }
}

// eslint-disable-next-line no-unused-vars
const share = (title, url, desc) => {
  return {
    title: title,
    path: url,
    desc: desc,
    success: function(res) {
      this.toast('分享成功')
    }
  }
}

const compareVersion = (version1, version2) => {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  const length1 = arr1.length
  const length2 = arr2.length
  const minlength = Math.min(length1, length2)
  let i = 0
  for (i; i < minlength; i++) {
    let a = parseInt(arr1[i])
    let b = parseInt(arr2[i])
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
  }
  if (length1 > length2) {
    for (let j = i; j < length1; j++) {
      if (parseInt(arr1[j]) !== 0) {
        return 1
      }
    }
    return 0
  } else if (length1 < length2) {
    for (let j = i; j < length2; j++) {
      if (parseInt(arr2[j]) !== 0) {
        return -1
      }
    }
    return 0
  }
  return 0
}

// eslint-disable-next-line no-unused-vars
const isLoading = false

export default {
  getCurrentTime,
  diffForHumans,
  dateFormat,
  weekFormat,
  hourFormat,
  niceNickname,
  formatZero,
  success,
  confirm,
  toast,
  alert,
  error,
  loading,
  loaded,
  share,
  compareVersion
}
