import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const { success, fail, complete } = params
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        success && success(position)
      }, (err) => {
        fail && fail(err)
      })
    }
  } catch (err) {
    console.error(err)
  }
  complete && complete()
}
