export default function () {
  const win: any = window
  const my: any = win.my

  try {
    my.clearStorage()
  } catch (err) {
    console.error(err)
  }
}
