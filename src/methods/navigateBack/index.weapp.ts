import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window
  const wx: any = win.wx

  try {
    wx.miniProgram.navigateBack({
      ...params
    })
  } catch (err) {
    console.error(err)
  }
}
