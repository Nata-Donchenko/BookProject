import {
  chooseRandomAvatar,
  getRandomNumber,
  getRandomEl,
  getRandomArr,
  getRandomCoor,
} from './util.js'

import {
  titles,
  types,
  checkTimes,
  features,
  descriptions,
  photos
} from './data.js'

export function Announcement() {
  this.author = {
    avatar: chooseRandomAvatar()
  }

  this.location = {
    x: getRandomCoor(35.65000, 35.70000),
    y: getRandomCoor(139.70000, 139.80000)
  }

  this.offer = {
    title: getRandomEl(titles),
    address: `${this.location.x}, ${this.location.y}`,
    price:  getRandomNumber(1, 1000000),
    type: getRandomEl(types),
    rooms: getRandomNumber(1, 10),
    guests: getRandomNumber(1, 20),
    checkin: getRandomEl(checkTimes),
    checkout: getRandomEl(checkTimes),
    features: getRandomArr(features),
    description: getRandomEl(descriptions),
    photos: getRandomArr(photos),
  }
}