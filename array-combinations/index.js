const algoritm = require("./algoritm")

function check(list, expected) {
  const result = algoritm.getCombinations(list)
  const theyAreEqual = JSON.stringify(expected) === JSON.stringify(result)
  if (theyAreEqual) {
    console.log(JSON.stringify(expected))
    console.log('SUCCESS!!')
  } else {
    console.log('Recebido', JSON.stringify(result))
    console.log('Esperado', JSON.stringify(expected))
    console.log('They are DIFFERENT')
  }
  console.log('----------------------------------------------------------')
}

check([0], [[], [0]])

check([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])

check([1, 2, 3, 4], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]])