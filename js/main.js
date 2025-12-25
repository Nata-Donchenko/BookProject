import {Announcement} from './modules/announcement.js'
import {createCard} from './modules/card-marking.js'
import {getRandomCard} from './modules/util.js'

const announcements = Array.from({length: 10}, () =>
  new Announcement()
)

const randomCard = getRandomCard(announcements)
console.log(randomCard)

const newCard = createCard(randomCard)

export const mapCanvas = document.querySelector('#map-canvas')
mapCanvas.appendChild(newCard)