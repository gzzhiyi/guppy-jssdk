export default interface InterfaceConfig {
  delta: number
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
