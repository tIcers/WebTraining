const removeItemAtIndex = (list, index) => {
  return [...list.slice(0,index), ...list.slice(index + 1)]
};

console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));
