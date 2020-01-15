export default interface InterfaceConfig {
  url: string
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
