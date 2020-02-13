import { noSupport } from '../../message'
import InterfaceConfig from './interface'
import web from './index.web'
import weapp from './index.weapp'
import alipay from './index.alipay'

export default function (params: InterfaceConfig) {
  const win:any = window
  const { ENV } = win.$gpy
  const { clientType } = ENV

  if (clientType === 'web') {
    web(params)
  } else if (clientType === 'weapp') {
    weapp(params)
  } else if (clientType === 'alipay') {
    alipay(params)
  } else {
    console.warn(`getLocation - ${noSupport}`)
  }
}
