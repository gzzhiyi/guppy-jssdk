export default interface InterfaceConfig {
  count?: number
  sizeType?: ['original', 'compressed']
  sourceType?: ['album', 'camera']
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
