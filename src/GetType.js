exports.getType = (it) => {
  return Object.prototype.toString.call(it).split(' ')[1].split(']')[0].toLowerCase()
}