import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window

  try {
    win.wx.getLocation({
      ...params
    })
  } catch (err) {
    console.error(err)
  }
}
