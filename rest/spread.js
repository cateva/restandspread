const filterOutOdds = (...arrs) => arrs.filter((num) => num % 2 === 0) 


//findMin
const findMin = (...nums) => nums.reduce((min,next) => min < next ? min : next);     


const mergeObjs = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }


const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}
  

  
const extend = (array1, array2) => {
    return [...array1, ...array2];
}
  

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}
  

  
const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}
  
const combine = (obj1, obj2) => {
return { ...obj1, ...obj2 };
}
  

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}