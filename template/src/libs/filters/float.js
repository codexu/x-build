import round from 'lodash/round';
import floor from 'lodash/floor';
import ceil from 'lodash/ceil';

export default function (value = 0, precision = 2, type = 'round') {
  let result;
  switch (type) {
    case 'floor':
      result = floor(value, precision);
      break;
    case 'ceil':
      result = ceil(value, precision);
      break;
    default:
      result = round(value, precision);
      break;
  }
  return result;
}
