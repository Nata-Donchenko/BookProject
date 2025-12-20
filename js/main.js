import {Announcement} from './modules/announcement.js'

const announcements = Array.from({length: 10}, () =>
  new Announcement()
)

console.log(announcements)