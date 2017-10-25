exports.getType = (it) => {
  return Object.prototype.toString.call(it).replace(/[\[\]]|object +/g,'').toLowerCase()
}