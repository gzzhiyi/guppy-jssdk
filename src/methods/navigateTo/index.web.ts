import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const win: any = window
  const { url } = params

  win.location.href = url
}
