import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const { delta } = params

  try {
    delta ? history.go(-delta) : history.back()
  } catch (err) {
    console.error(err)
  }
}
