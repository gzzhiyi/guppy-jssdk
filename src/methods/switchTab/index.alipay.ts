import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window
  const my: any = win.my
  const { url } = params

  try {
    my.switchTab({
      ...params,
      url
    })
  } catch (err) {
    console.error(err)
  }
}
