import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  const { url } = params

  try {
    location.replace(url)
  } catch (err) {
    console.error(err)
  }
}
