export default interface InterfaceConfig {
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
