import chooseImage from './methods/chooseImage'
import clearStorage from './methods/clearStorage'
import getEnv from './methods/getEnv/'
import getLocation from './methods/getLocation'
import getNetworkType from './methods/getNetworkType'
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
import setTitle from './methods/setTitle'
import switchTab from './methods/switchTab'

export const VERSION: string = require('../package.json').version
export const ENV: object = getEnv()

const fn = {
  chooseImage,
  clearStorage,
  getEnv,
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
  setTitle,
  switchTab
}

const API = {
  VERSION,
  ENV,
  ...fn
}

const win: any = window
win.$gy = API

export {
  chooseImage,
  clearStorage,
  getEnv,
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
  setTitle,
  switchTab
}
