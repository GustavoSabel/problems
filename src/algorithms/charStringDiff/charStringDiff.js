function charStringDiff(s, t) {
  let arrayLettersT = [...t]

  for (let i = 0; i < s.length; i++) {
    const elementS = s[i];
    const indexElementInArrayT = arrayLettersT.findIndex(x => x === elementS)
    if (indexElementInArrayT >= 0) {
      arrayLettersT.splice(indexElementInArrayT, 1)
    }
  }

  return arrayLettersT[0]
}

module.exports = { charStringDiff }