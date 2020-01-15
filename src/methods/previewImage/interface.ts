export default interface InterfaceConfig {
  urls: string[]
  current?: number | string
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
