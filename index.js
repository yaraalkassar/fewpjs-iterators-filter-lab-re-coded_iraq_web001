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

function matchName(startsWith, string) {
  return startsWith.filter(obj => obj.name === string)
}
