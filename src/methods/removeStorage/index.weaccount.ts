import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const { key, success, fail, complete } = params

  try {
    localStorage.removeItem(key)
    success && success()
  } catch (err) {
    fail && fail(err)
  }
  complete && complete()
}
