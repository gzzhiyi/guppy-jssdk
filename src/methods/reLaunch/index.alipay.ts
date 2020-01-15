import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window
  try {
    const { url } = params
    win.my.reLaunch({
      ...params,
      url
    })
  } catch (err) {
    console.error(err)
  }
}
