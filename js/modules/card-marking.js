const housingTypeMap = {
  palace: 'Квартира',
  flat: 'Бунгало',
  house: 'Дом',
  bungalow: 'Дворец',
}

export function createCard (announcement) {
  const template = document.querySelector('#card').content.querySelector('.popup')
  const card = template.cloneNode(true)

  const cardTitle = card.querySelector('.popup__title')
  
  if (announcement.offer.title) {
    cardTitle.textContent = announcement.offer.title
  } else {
    cardTitle.remove()
  }

  const cardAddress = card.querySelector('.popup__text--address')

  if (announcement.offer.address) {
    cardAddress.textContent = announcement.offer.address 
  } else {
    cardAddress.remove()
  }

  const cardPrice = card.querySelector('.popup__text--price')

  if (announcement.offer.price) {
    cardPrice.textContent = `${announcement.offer.price} ₽/ночь`
  } else {
    cardPrice.remove()
  }

  const cardType = card.querySelector('.popup__type')

  if (announcement.offer.type && housingTypeMap[announcement.offer.type]) {
    cardType.textContent = housingTypeMap[announcement.offer.type]
  } else {
    cardType.remove()
  }

  const cardCapacity = card.querySelector('.popup__text--capacity')

  if (announcement.offer.rooms && announcement.offer.guests) {
    if (announcement.offer.rooms === 1) {
      cardCapacity.textContent = `${announcement.offer.rooms} комната для ${announcement.offer.guests} гостей`
    } else if (announcement.offer.rooms > 4) {
      cardCapacity.textContent = `${announcement.offer.rooms} комнат для ${announcement.offer.guests} гостей`
    } else {
      cardCapacity.textContent = `${announcement.offer.rooms} комнаты для ${announcement.offer.guests} гостей`
    }
  } else {
    cardCapacity.remove()
  }

  const cardTime = card.querySelector('.popup__text--time')

  if (announcement.offer.checkin && announcement.offer.checkout) {
    cardTime.textContent = `Заезд после ${announcement.offer.checkin}, выезд до ${announcement.offer.checkout}`
  }

  const cardFeatures = card.querySelector('.popup__features') 
  
  if (announcement.offer.features && announcement.offer.features.length > 0) {
    cardFeatures.innerHTML = ''

    announcement.offer.features.forEach((feature) => {
      const li = document.createElement('li')
      li.classList.add('popup__feature', `popup__feature--${feature}`)
      li.textContent = feature
      cardFeatures.appendChild(li)
    });
  } else {
    card.remove()
  }

  const cardDescription = card.querySelector('.popup__description')
  
  if (announcement.offer.description) {
    cardDescription.textContent = announcement.offer.description
  } else {
    cardDescription.remove()
  }

  const cardPhotos = card.querySelector('.popup__photos')
  const cardPhotoWidth = 45
  const cardPhotoHeight = 40

  if (announcement.offer.photos && announcement.offer.photos.length > 0) {
    cardPhotos.innerHTML = ''
    
    announcement.offer.photos.forEach((photo) => {
      const img = document.createElement('img')
      img.classList.add('.popup__photo')
      img.src = photo
      img.alt = 'Фотография жилья'
      img.width = cardPhotoWidth
      img.height = cardPhotoHeight

      cardPhotos.appendChild(img)
    })
  } else {
    cardPhotos.remove()
  }

  const cardAvatar = card.querySelector('.popup__avatar')
  const cardAvatarSize = 70

  if (announcement.author.avatar) {
    cardAvatar.src = announcement.author.avatar
    cardAvatar.alt = 'Аватар пользователя'
    cardAvatar.width = cardAvatarSize
    cardAvatar.height = cardAvatarSize
  } else {
    cardAvatar.remove()
  }

  return card
}