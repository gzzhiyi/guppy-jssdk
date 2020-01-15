import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window

  try {
    win.wx.miniProgram.postMessage({
      ...params
    })
  } catch (err) {
    console.error(err)
  }
}
