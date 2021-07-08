exports.isIncludedIn = (array) => {
  return ((item) => {
    return  array.indexOf(item) !== -1;
  })
} 