new VConsole()

console.log($gy)

function clearStorage () {
  $gy.clearStorage()
}

function getRef () {
  $gy.getRef()
}

function getRuntimeEnv () {
  $gy.getRuntimeEnv()
}

function getStorage () {
  $gy.getStorage({
    key: 'userName',
    success: function (res) {
      console.log(res)
    }
  })
}

function getUa () {
  const ua = $gy.getUa()
  console.log(ua)
}

function getUrlParams () {
  console.log($gy.getUrlParams())
}

function getUserToken () {
  console.log($gy.getUserToken())
}

function postMessage () {
  $gy.postMessage({
    data: { foo: 'bar' }
  })
}

function removeStorage () {
  $gy.removeStorage({
    key: 'userName',
    success: function () {
      console.log('remove success!')
    }
  })
}

function setStorage () {
  $gy.setStorage({
    key: 'userName',
    data: 'Peter.Chan'
  })
}

function setTitle () {
  $gy.setTitle({
    title: '测试页面'
  })
}

function getLocation () {
  $gy.getLocation({
    success: function (res) {
      console.log(res)
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

function openLocation () {
  $gy.openLocation({
    latitude: '9999999',
    longitude: '9999999',
    name: '深圳市民中心',
    success: function (res) {
      console.log(res)
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

function navigateBack () {
  $gy.navigateBack({
    delta: 2
  })
}

function navigateTo () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gy.navigateTo({
    url: urlConfig[$gy.UA.type]
  })
}

function redirectTo () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gy.redirectTo({
    url: urlConfig[$gy.UA.type]
  })
}

function reLaunch () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gy.reLaunch({
    url: urlConfig[$gy.UA.type]
  })
}

function switchTab () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gy.switchTab({
    url: urlConfig[$gy.UA.type]
  })
}

function toLogin () {
  $gy.toLogin()
}

function chooseImage () {
  $gy.chooseImage({
    success: function (res) {
      console.log(res)
    }
  })
}

function getNetworkType () {
  $gy.getNetworkType({
    success: function (res) {
      console.log(res)
    }
  })
}

function previewImage () {
  $gy.previewImage({
    success: function (res) {
      console.log(res)
    }
  })
}

function scanCode () {
  $gy.scanCode({
    success: function (res) {
      console.log(res)
    }
  })
}

function share() {
  $gy.share({
    title: 'Guppy JS-SDK Test',
    desc: '测试分享功能',
    link: 'https://m.example.cn',
    iconUrl: 'https://uact.example.cn/static/images/movecar/app_share_head.png',
    imgUrl: 'https://uact.example.cn/static/images/movecar/weapp_share_head.png',
    success: function() {
      console.log('share success')
    },
    fail: function() {
      console.log('share fail')
    }
  })
}