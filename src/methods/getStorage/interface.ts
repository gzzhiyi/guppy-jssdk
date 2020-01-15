export default interface InterfaceConfig {
  key: string
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
