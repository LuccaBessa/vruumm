export const phoneMask = (phoneNumber: string): string => {
  let ddd, firstPart, lastPart

  if (phoneNumber.length == 11) {
    ddd = phoneNumber.substring(0, 2)
    firstPart = phoneNumber.substring(2, 7)
    lastPart = phoneNumber.substring(7)

    return `(${ddd}) ${firstPart}-${lastPart}`
  } else {
    ddd = phoneNumber.substring(0, 2)
    firstPart = phoneNumber.substring(2, 5)
    lastPart = phoneNumber.substring(6)

    return `(${ddd}) ${firstPart}-${lastPart}`
  }
}

export const cpfMask = (cpf: string): string => {
  let firstPart, secondPart, thirdPart, lastPart

  firstPart = cpf.substring(0, 3)
  secondPart = cpf.substring(3, 6)
  thirdPart = cpf.substring(6, 9)
  lastPart = cpf.substring(9)

  return `${firstPart}.${secondPart}.${thirdPart}-${lastPart}`
}

export const cepMask = (cep: string): string => {
  let firstPart, lastPart

  firstPart = cep.substring(0, 5)
  lastPart = cep.substring(5)

  return `${firstPart}-${lastPart}`
}
