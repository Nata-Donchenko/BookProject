const titles = [
  'Apartment in the city center',
  'Spacious house with a garden',
  'Luxurious palace with a sea view',
  'Modern bungalow for relaxation',
  'Comfortable apartment near the metro'
]

const types = ['palace', 'flat', 'house', 'bungalow']

const checkTimes = ['12:00', '13:00', '14:00'] 

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']

const descriptions = [
  'Cozy place for a comfortable stay',
  'Spacious and comfortable accommodation',
  'Modern apartment in a quiet area',
  'Clean and comfortable place',
  'Nice place with all basic amenities'
]

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
]

function chooseRandomAvatar () {
  let num = Math.floor(Math.random() * 8) + 1
  num = '0' + num
  const avatar = `img/avatars/user${num}.png`
  return avatar
}

function getRandomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1) + min)
  return num
}

function getRandomEl (arr) {
  const randomEl = arr[getRandomNumber(0, arr.length - 1)]
  return randomEl
}

function getRandomArr(arr) {
  const randomArr = arr.slice()

  const count = Math.floor(Math.random() * randomArr.length) + 1

  for (let i = randomArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArr[i], randomArr[j]] = [randomArr[j], randomArr[i]]
  }

  return randomArr.slice(0, count)
}

function getRandomCoor (min, max, digits = 5) {
  const randomCoor = Number((Math.random() * (max - min) + min).toFixed(digits))
  return randomCoor
}

function Announcement() {
  this.author = {
    avatar: chooseRandomAvatar()
  },

  this.location = {
    x: getRandomCoor(35.65000, 35.70000),
    y: getRandomCoor(139.70000, 139.80000)
  }

  this.offer = {
    title: getRandomEl(titles),
    adress: `${this.location.x}, ${this.location.y}`,
    price:  getRandomNumber(1, 1000000),
    type: getRandomEl(types),
    rooms: getRandomNumber(1, 10),
    guests: getRandomNumber(1, 20),
    checkin: getRandomEl(checkTimes),
    checout: getRandomEl(checkTimes),
    features: getRandomArr(features),
    description: getRandomEl(descriptions),
    photos: getRandomArr(photos),
  }
}

const announcements = []

for (let i = 1; i <= 10; i++) {
  const announcement = new Announcement()
  announcements.push(announcement)
}

console.log(announcements)