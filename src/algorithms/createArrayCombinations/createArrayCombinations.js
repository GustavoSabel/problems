function createArrayCombinations(list) {
  const listCombinations = [[]];
  for (let i = 0; i < list.length; i++) {
    const newCombination = list[i];
    listCombinations.push([ newCombination ]);
    
    const endIndexNewList = listCombinations.length - 1
    for (let iNewList = 1; iNewList < endIndexNewList; iNewList++) {
      const combination = listCombinations[iNewList];
      listCombinations.push([...combination, newCombination]);
    }
  }
  return listCombinations;
}

module.exports = { createArrayCombinations }