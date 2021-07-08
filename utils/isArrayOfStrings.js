exports.isArrayOfStrings = (array) => {
  return array.every((item) => {
    return typeof item === "string"
  })
} 