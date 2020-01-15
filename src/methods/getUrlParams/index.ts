export default function () {
  const params: any = {}
  let search = location.search

  if (search.indexOf('?') !== -1) {
    let searchArr = search.substr(1).split('&')
    searchArr.forEach(item => {
      let paramsArr = item.split('=')
      params[paramsArr[0]] = paramsArr[1]
    })
  }
  return params
}
