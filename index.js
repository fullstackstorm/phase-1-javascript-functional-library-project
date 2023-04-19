const myEach = (collection, callback) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
};

const myMap = (collection, callback) => {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i]));
    }
  } else {
    for (let key in collection) {
      result.push(callback(collection[key], key));
    }
  }
  return result;
};

const myReduce = (collection, callback, initialValue) => {
  let acc =
    initialValue !== undefined ? initialValue : Object.values(collection)[0];
  const startIdx = initialValue !== undefined ? 0 : 1;

  if (Array.isArray(collection)) {
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else {
    const keys = Object.keys(collection);
    for (let i = startIdx; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], collection);
    }
  }

  return acc;
};

const myFind = (collection, predicate) => {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
};

const myFilter = (collection, predicate) => {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      result.push(collection[i]);
    }
  }
  return result;
};

const mySize = (collection) => {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
};

const myFirst = (array, n = 1) => {
  if (n === 1) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
};

const myLast = (array, n = 1) => {
  if (n === 1) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
};

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}
