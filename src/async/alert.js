export default (value, updater) => {
  setTimeout(() => {
    updater(value.toUpperCase())
  }, 1000)
}
