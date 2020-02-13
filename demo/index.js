new VConsole()

console.log($gpy)

function clearStorage () {
  $gpy.clearStorage()
}

function getRef () {
  $gpy.getRef()
}

function getRuntimeEnv () {
  $gpy.getRuntimeEnv()
}

function getStorage () {
  $gpy.getStorage({
    key: 'userName',
    success: function (res) {
      console.log(res)
    }
  })
}

function getRuntimeEnv () {
  const env = $gpy.getRuntimeEnv()
  console.log(env)
}

function getUrlParams () {
  console.log($gpy.getUrlParams())
}

function getUserToken () {
  console.log($gpy.getUserToken())
}

function postMessage () {
  $gpy.postMessage({
    data: { foo: 'bar' }
  })
}

function removeStorage () {
  $gpy.removeStorage({
    key: 'userName',
    success: function () {
      console.log('remove success!')
    }
  })
}

function setStorage () {
  $gpy.setStorage({
    key: 'userName',
    data: 'Peter.Chan'
  })
}

function setPageTitle () {
  $gpy.setPageTitle({
    title: '测试页面'
  })
}

function getLocation () {
  $gpy.getLocation({
    success: function (res) {
      console.log(res)
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

function openLocation () {
  $gpy.openLocation({
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
  $gpy.navigateBack({
    delta: 2
  })
}

function navigateTo () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gpy.navigateTo({
    url: urlConfig[$gpy.ENV.type]
  })
}

function redirectTo () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gpy.redirectTo({
    url: urlConfig[$gpy.ENV.type]
  })
}

function reLaunch () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gpy.reLaunch({
    url: urlConfig[$gpy.ENV.type]
  })
}

function switchTab () {
  var urlConfig = {
    weapp: '/pages/home/index',
    app: '01',
    web: '//m.example.cn/#/login'
  }
  $gpy.switchTab({
    url: urlConfig[$gpy.ENV.type]
  })
}

function toLogin () {
  $gpy.toLogin()
}

function chooseImage () {
  $gpy.chooseImage({
    success: function (res) {
      console.log(res)
    }
  })
}

function getNetworkType () {
  $gpy.getNetworkType({
    success: function (res) {
      console.log(res)
    }
  })
}

function previewImage () {
  $gpy.previewImage({
    success: function (res) {
      console.log(res)
    }
  })
}

function scanCode () {
  $gpy.scanCode({
    success: function (res) {
      console.log(res)
    }
  })
}

function share() {
  $gpy.share({
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