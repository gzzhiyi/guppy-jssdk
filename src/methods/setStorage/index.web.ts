import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const { key, data, success, fail, complete } = params

  try {
    localStorage.setItem(key, JSON.stringify(data))
    success && success()
  } catch (err) {
    fail && fail(err)
  }
  complete && complete()
}
