export default interface InterfaceConfig {
  longitude: number | string
  latitude: number | string
  name?: string
  address?: string
  scale? : number
  success?: Function
  fail?: Function
  complete?: Function
  [propName: string]: any
}
