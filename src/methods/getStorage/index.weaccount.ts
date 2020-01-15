import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const { key, success, fail, complete } = params

  try {
    const val = localStorage.getItem(key)
    success && success(val)
  } catch (err) {
    fail && fail(err)
  }
  complete && complete()
}
