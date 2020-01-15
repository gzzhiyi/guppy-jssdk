import InterfaceConfig from './interface'

export default function (params: InterfaceConfig) {
  try {
    const { title } = params
    document.title = title
  } catch (err) {
    console.error(err)
  }
}
