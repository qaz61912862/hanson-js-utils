/**
 * 删除对象空值
 * @param o
 */
export const isObject = (o: any) => {
  return Object.prototype.toString.call(o).slice(-7, -1).toLowerCase() === 'object'
}

/**
 * 判断val 是否没有值
 * @param {*} val
 */
 export const isEmpty = (val: any) => {
  return val === null || val === '' || val === undefined;
}

/**
 * 深拷贝
 * @param obj
 */

export const deepClone = (obj: any) => {
  if(!isObject(obj)){
      throw new Error('非对象')
  }
  let isArray = Array.isArray(obj);
  let newObj = isArray?[...obj]:{...obj};
  Reflect.ownKeys(obj).forEach(
      (key)=>{
          newObj[key] = isObject(obj[key])?deepClone(obj[key]):obj[key];
      }
  )
  return newObj;
}

/**
 * 删除对象空值
 * @param o
 */
const deepDeleteEmptyValue = (o: any) => {
  if (!isObject(o)) {
    return o;
  }
  const newVal: any = deepClone(o);
  for (let key in newVal) {
    if (!newVal.hasOwnProperty(key)) {
      continue;
    }
    if (isObject(newVal[key])) {
      newVal[key] = deepDeleteEmptyValue(newVal[key]);
      continue;
    }
    if (isEmpty(newVal[key])) {
      delete newVal[key];
    }
  }
  return newVal;
}

export default deepDeleteEmptyValue;