export default interface InterfaceConfig {
  key: string
  data: any
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
