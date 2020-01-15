import { noSupport } from '../../message'
import web from './index.web'
import weapp from './index.weapp'
import weaccount from './index.weaccount'
import alipay from './index.alipay'
import alipaylife from './index.alipaylife'

export default function () {
  const win:any = window
  const { ENV } = win.$gy
  const { clientType } = ENV

  if (clientType === 'web') {
    web()
  } else if (clientType === 'weapp') {
    weapp()
  } else if (clientType === 'weaccount') {
    weaccount()
  } else if (clientType === 'alipay') {
    alipay()
  } else if (clientType === 'alipaylife') {
    alipaylife()
  } else {
    console.warn(`clearStorage - ${noSupport}`)
  }
}
