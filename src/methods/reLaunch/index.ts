import { noSupport } from '../../message'
import InterfaceConfig from './interface'
import weapp from './index.weapp'
import alipay from './index.alipay'

export default function (params: InterfaceConfig) {
  const win:any = window
  const { ENV } = win.$gpy
  const { clientType } = ENV

  if (clientType === 'weapp') {
    weapp(params)
  } else if (clientType === 'alipay') {
    alipay(params)
  } else {
    console.warn(`reLauch - ${noSupport}`)
  }
}
