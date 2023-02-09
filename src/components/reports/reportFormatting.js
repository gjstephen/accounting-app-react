const formatNumbers = (number, sign) => {
  const formattedNum = []
  Number(number).toFixed(2).split('').reverse()
    .forEach((digit, index) => {
      if (index % 3 === 0 && index !== 3 && index !== 0) {
        formattedNum.push(',')
      }
      formattedNum.push(digit)
    })
    
  if (number === 0) {
    return '-'
  } else if (sign === 'debit') {
    return formattedNum.reverse().join('')
  } else if (sign === 'credit') {
    return `(${formattedNum.reverse().join('')})`
  }
}

const formatBalance = (debit, credit) => {
  const formattedNum = []
  const netBalance = Number(debit) - Number(credit)

  netBalance.toFixed(2).split('').reverse()
    .forEach((digit, index) => {
      if (index % 3 === 0 && index !== 3 && index !== 0) {
        if (netBalance.toFixed(2).split('').reverse()[index] !== '-') {
          formattedNum.push(',')
        }
      }
      formattedNum.push(digit)
    })
  
  const returnNum = formattedNum.reverse().join('')

  if (returnNum === 0) {
    return '-'
  } else if (returnNum[0] === '-') {
    return `(${returnNum.slice(1,)})`
  } else {
    return returnNum
  }
}

module.exports={ formatNumbers, formatBalance } 