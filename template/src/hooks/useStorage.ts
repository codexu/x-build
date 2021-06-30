type StorageApi = 'localStorage' | 'sessionStorage';
type StorageLike = 'getItem' | 'setItem' | 'removeItem' | 'clear';
type StorageValue = string | number | boolean | object | null;

const isType = (value: StorageValue): string => {
  const type = Object.prototype.toString.apply(value);
  return type;
};

/**
 * {} => '{}' => {}
 * 1 => '1' => 1
 * true => 'true => true
 * 'string' => 'string' => 'string'
 * null => 'null' => null
 * @param {string|number|boolean|object|null} value 数据
 * @param {string} type 存储 | 读取
 * @returns {string|number|boolean|object|null}
 */
const cacheValue = (value: StorageValue, type: 'get' | 'set') => {
  let newValue;
  const valueType = isType(value);

  if (type === 'set') {
    if (valueType === '[object Object]' || valueType === '[object Array]') {
      newValue = JSON.stringify([JSON.stringify(value), valueType]);
    } else {
      newValue = JSON.stringify([value, valueType]);
    }
  } else if (type === 'get') {
    const [storageVal, storageType] = [...JSON.parse(value as string)];
    if (storageType === '[object String]') {
      newValue = storageVal;
    } else {
      newValue = JSON.parse(storageVal);
    }
  }

  return newValue;
};

/**
 * useStorage
 * @param {string} api 'localStorage' | 'sessionStorage'
 * @param {string} storage 'getItem' | 'setItem' | 'removeItem' | 'clear'
 * @param {string=} key 存储键
 * @param {(string|number|boolean|object|symbol|null)=} value 存储值
 */
export default function useStorage<T extends StorageValue>(
  api: StorageApi,
  storage: StorageLike,
  key?: string,
  value?: T,
): StorageValue {
  let result = null;

  if (storage === 'getItem') {
    try {
      result = cacheValue(window[api][storage](key as string), 'get');
    } catch (e) {
      console.error(`${api}.getItem：`, e);
    }
  } else if (storage === 'setItem') {
    try {
      window[api][storage](key as string, cacheValue(value as T, 'set'));
      result = true;
    } catch (e) {
      console.error(`${api}.setItem：`, e);
    }
  } else if (storage === 'removeItem') {
    try {
      window[api][storage](key as string);
      result = true;
    } catch (e) {
      console.error(`${api}.removeItem：`, e);
    }
  } else if (storage === 'clear') {
    try {
      window[api][storage]();
      result = true;
    } catch (e) {
      console.error(`${api}.clear：`, e);
    }
  }

  return result;
}
