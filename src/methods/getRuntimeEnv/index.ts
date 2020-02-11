const u: string = navigator.userAgent

function getPlatform () {
  let platform = ''
  if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
    platform = 'android'
  } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    platform = 'ios'
  } else {
    platform = 'unknow'
  }
  return platform
}

function getClientType () {
  const win: any = window
  let clientType = ''
  if (/MicroMessenger/i.test(u)) {
    if (/miniProgram/i.test(u)) {
      clientType = 'weapp'
    } else if (win.wx.miniProgram) {
      win.wx.miniProgram.getEnv((res: any) => {
        clientType = res.miniprogram ? 'weapp' : 'weaccount'
      })
    } else {
      clientType = 'weaccount'
    }
  } else if (/AlipayClient/i.test(u)) {
    win.my.getEnv((res: any) => {
      if (res.miniprogram) {
        clientType = 'alipay'
      } else {
        clientType = 'alipaylife'
      }
    })
  } else {
    clientType = 'web'
  }
  return clientType
}

export default function () {
  const platform = getPlatform()
  const clientType = getClientType()
  return {
    platform,
    clientType
  }
}
