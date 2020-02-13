import chooseImage from './methods/chooseImage'
import clearStorage from './methods/clearStorage'
import getLocation from './methods/getLocation'
import getNetworkType from './methods/getNetworkType'
import getRuntimeEnv from './methods/getRuntimeEnv'
import getStorage from './methods/getStorage'
import getUrlParams from './methods/getUrlParams/'
import navigateBack from './methods/navigateBack'
import navigateTo from './methods/navigateTo'
import openLocation from './methods/openLocation'
import postMessage from './methods/postMessage'
import previewImage from './methods/previewImage'
import redirectTo from './methods/redirectTo'
import reLaunch from './methods/reLaunch'
import removeStorage from './methods/removeStorage'
import setStorage from './methods/setStorage'
import setPageTitle from './methods/setPageTitle'
import switchTab from './methods/switchTab'

export const VERSION: string = require('../package.json').version
export const ENV: object = getRuntimeEnv()

const fn = {
  chooseImage,
  clearStorage,
  getRuntimeEnv,
  getLocation,
  getNetworkType,
  getStorage,
  getUrlParams,
  navigateBack,
  navigateTo,
  openLocation,
  postMessage,
  previewImage,
  redirectTo,
  reLaunch,
  removeStorage,
  setStorage,
  setPageTitle,
  switchTab
}

const API = {
  VERSION,
  ENV,
  ...fn
}

const win: any = window
win.$gpy = API

export {
  chooseImage,
  clearStorage,
  getLocation,
  getNetworkType,
  getRuntimeEnv,
  getStorage,
  getUrlParams,
  navigateBack,
  navigateTo,
  openLocation,
  postMessage,
  previewImage,
  redirectTo,
  reLaunch,
  removeStorage,
  setStorage,
  setPageTitle,
  switchTab
}
