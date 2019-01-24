function checkOS(arr, osType) {
  let result = '';
  if (osType === 'Windows_NT') {
    arr.forEach((item, index) => {
      index === 0 ? result += item : result = result + ' & ' + item;
    });
  } else {
    arr.forEach((item, index) => {
      index === 0 ? result += item : result = result + '\n' + item;
    });
  }
  return result;
}

module.exports = checkOS;