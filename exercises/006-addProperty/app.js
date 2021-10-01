function addProperty(myObj, key) {
  myObj[key] = true
  return myObj
}

var Objeto = {};

console.log(addProperty(Objeto, 'nuevo'))

