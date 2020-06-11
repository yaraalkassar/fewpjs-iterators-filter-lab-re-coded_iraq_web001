// Code your solution here
function findMatching(drivers, string) {
  let availableDrivers = drivers.filter(driver => {
    return driver === string;
  })
}
function fuzzyMatch(drivers, string) {
  return drivers.filter(element => element.startsWith(string))
}

function matchName(arrOfObjects, string) {
  return arrOfObjects.filter(obj => obj.name === string)
}
