// Code your solution here
function findMatching(drivers, string) {
  let availableDrivers = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  })
  return availableDrivers;
}
function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.charAt(0)===string.charAt(0));
}

function matchName(startsWith, string) {
  return startsWith.filter(driver => driver.name === string)
}
