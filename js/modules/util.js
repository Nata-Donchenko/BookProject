const avatarsQuantity = 8

export function chooseRandomAvatar () {
  let num = Math.floor(Math.random() * avatarsQuantity) + 1
  num = '0' + num
  const avatar = `img/avatars/user${num}.png`
  return avatar
}

export function getRandomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1) + min)
  return num
}

export function getRandomEl (arr) {
  const randomEl = arr[getRandomNumber(0, arr.length - 1)]
  return randomEl
}

export function getRandomArr(arr) {
  const randomArr = arr.slice()

  const count = Math.floor(Math.random() * randomArr.length) + 1

  for (let i = randomArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArr[i], randomArr[j]] = [randomArr[j], randomArr[i]]
  }

  return randomArr.slice(0, count)
}

export function getRandomCoor (min, max, digits = 5) {
  const randomCoor = Number((Math.random() * (max - min) + min).toFixed(digits))
  return randomCoor
}

export function getRandomCard (arr) {
  const randomCard = arr[getRandomNumber(0, arr.length - 1)]
  return randomCard
}