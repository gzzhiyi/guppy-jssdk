import { noSupport } from '../../message'
import InterfaceConfig from './interface'
import web from './index.web'
import weapp from './index.weapp'
import weaccount from './index.weaccount'
import alipay from './index.alipay'
import alipaylife from './index.alipaylife'

export default function (params: InterfaceConfig) {
  const win:any = window
  const { ENV } = win.$gy
  const { clientType } = ENV

  if (clientType === 'web') {
    web(params)
  } else if (clientType === 'weapp') {
    weapp(params)
  } else if (clientType === 'weaccount') {
    weaccount(params)
  } else if (clientType === 'alipay') {
    alipay(params)
  } else if (clientType === 'alipaylife') {
    alipaylife(params)
  } else {
    console.warn(`setStorage - ${noSupport}`)
  }
}
