import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window
  const wx: any = win.wx || ''
  const { url } = params

  try {
    wx.miniProgram.navigateTo({
      ...params,
      url
    })
  } catch (err) {
    console.error(err)
  }
}
