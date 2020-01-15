import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  try {
    const { url } = params
    location.replace(url)
  } catch (err) {
    console.error(err)
  }
}
