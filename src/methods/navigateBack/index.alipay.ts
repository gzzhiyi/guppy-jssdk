import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window
  const my: any = win.my

  try {
    my.navigateBack({
      ...params
    })
  } catch (err) {
    console.error(err)
  }
}
