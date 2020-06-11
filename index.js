// Code your solution here
function findMatching(drivers, string) {
  let availableDrivers = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  })
  return availableDrivers;
}
function fuzzyMatch(drivers, string) {
  return drivers.filter(element => element.startsWith(string))
}

function matchName(arrOfObjects, string) {
  return arrOfObjects.filter(obj => obj.name === string)
}
