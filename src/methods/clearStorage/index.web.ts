export default function () {
  try {
    localStorage.clear()
  } catch (err) {
    console.error(err)
  }
}
