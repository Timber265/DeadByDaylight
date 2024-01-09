import languageShow from "./func/languageShow.js"
const headerFormElem = document.forms.headerForm

let itemListId = 0
let prevElement
const itemLisitElem = document.querySelectorAll('.item__list')
itemLisitElem.forEach(element => {
  element.id = itemListId++
  document.addEventListener('click', e => {
    const isClickedHeader = headerFormElem.contains(e.target)
    if(!isClickedHeader) closeAllMenu(), rotateToHide()
  })
  element.addEventListener('click', e => {
    if(prevElement) {
      prevElement.children[0].children[0].style.transform = `rotate(${0}deg)`
      prevElement.children[0].children[0].style.opacity = `0.5`
    }
    if(prevElement == element) {
      rotateToHide(),closeGameInfo(),closeMediaInfo(),closeCommunityInfo()
      prevElement = false
    }else {
      switch(element.id) {
        case '1': prevElement = element, showGameInfo(), rotateToShow(); break
        case '2': prevElement = element, showMediaInfo(), rotateToShow(); break
        case '3': prevElement = element, showCommunityInfo(), rotateToShow(); break
      }
      switch(prevElement.id) {
        case '1': closeMediaInfo(), closeCommunityInfo(); break
        case '2': closeGameInfo(), closeCommunityInfo(); break
        case '3': closeGameInfo(), closeMediaInfo(); break
      }
    }
  })
});
languageShow();

function closeAllMenu() {
  closeGameInfo(),
  closeMediaInfo(),
  closeCommunityInfo()
}
function rotateToHide() {
  prevElement ? prevElement.children[0].children[0].style.transform = `rotate(${0}deg)`:prevElement
  prevElement ? prevElement.children[0].children[0].style.opacity = `.5 `:prevElement
}
function rotateToShow() {
  prevElement ? prevElement.children[0].children[0].style.transform = `rotate(${-180}deg)`:prevElement
  prevElement ? prevElement.children[0].children[0].style.opacity = `1`:prevElement
}
function showGameInfo() {
  const menuGameElem = document.querySelector('.menu-game')
  const gameAlbomElem = document.querySelectorAll('.game-albom')

  menuGameElem.style.display = 'block'
  setTimeout(() => {
    menuGameElem.style.height = '420px'
    setTimeout(() => {
      gameAlbomElem.forEach((elem) => {
        elem.style.height = '210px'
      })
    },150)
  },1)
}
function closeGameInfo()  {
  const menuGameElem = document.querySelector('.menu-game')
  const gameAlbomElem = document.querySelectorAll('.game-albom')

  gameAlbomElem.forEach((elem) => {
    elem.style.height = '0px'
  })
  setTimeout(() => {
    menuGameElem.style.height = '0px'
    setTimeout(() => {
      menuGameElem.style.display = 'none'
    },150)
  },250)
}
function showMediaInfo() {
  const menuMediaElem = document.querySelector('.menu-media')
  const menuMediaAlbom = document.querySelectorAll('.media-albom')
  menuMediaElem.style.display = 'block'
  setTimeout(() => {
    menuMediaElem.style.height = '420px'
    setTimeout(() => {
      menuMediaAlbom.forEach(element => {
        element.style.height = '200px'
      });
    }, 150)
  }, 1)
}
function closeMediaInfo() {
  const menuMediaElem = document.querySelector('.menu-media')
  const menuMediaAlbom = document.querySelectorAll('.media-albom')
  menuMediaAlbom.forEach((element) => {
    element.style.height = '0'
  })
  setTimeout(() => {
    menuMediaElem.style.height = '0px'
    setTimeout(() => {
      menuMediaElem.style.display = 'none'
    },150)
  },250)
}
function showCommunityInfo() {
  const menuCommunityElem = document.querySelector('.menu-community')
  const menuCommunityWrapperElem = document.querySelector('.community-wrapper')
  menuCommunityElem.style.display = 'block'
  setTimeout(() => {
    menuCommunityElem.style.height = '420px'
    setTimeout(() => {
      menuCommunityWrapperElem.style.height = '351px'
    }, 150);
  }, 1);
}
function closeCommunityInfo() {
  const menuCommunityElem = document.querySelector('.menu-community')
  const menuCommunityWrapperElem = document.querySelector('.community-wrapper')
  menuCommunityWrapperElem.style.height = '0'
  setTimeout(() => {
    menuCommunityElem.style.height = '0'
    setTimeout(() => {
      menuCommunityElem.style.display = 'none'
    }, 150);
  }, 250);
}


const galleryArr = [
  {
    galleryId: 0,
    mainImage: './img/sectionGallery/Screenshot_3.webp',
    mainText: 'Survival is Better Together',
    mainParagraph: 'Will you be a leader? A hero? An escape artist? Discover the skills of each Survivor and be the last one standing – or better yet – the reason you all make it out alive.',
    tabText: 'Survival is Better Together'
  },
  {
    galleryId: 1,
    mainImage: './img/sectionGallery/Screenshot_4.webp',
    mainText: 'Unpredictable Multiplayer Action',
    mainParagraph: 'Experience the thrill of the unknown every time you play. All maps are procedurally generated, and all spawn-points randomized, so Killers and Survivors never know what to expect.',
    tabText: 'Unpredictable Multiplayer Action'
  },
  {
    galleryId: 2,
    mainImage: './img/sectionGallery/Screenshot_5.webp',
    mainText: 'rewarding progression',
    mainParagraph: 'Complete objectives, level up your characters, and earn Bloodpoints in every trial to unlock powerful new Items, Offerings, Perks, Add-Ons, and more',
    tabText: 'rewarding progression'
  },
  {
    galleryId: 3,
    mainImage: './img/sectionGallery/Screenshot_1.webp',
    mainText: 'Play Killer or Survivor',
    mainParagraph: 'Choose a role and live up to its name. Killers play an intense first-person perspective to better focus on their prey, while Survivors play in third person for greater awareness.',
    tabText: 'Play Killer or Survivor'
  },
  {
    galleryId: 4,
    mainImage: './img/sectionGallery/Screenshot_2.webp',
    mainText: 'The Thrill of the Hunt',
    mainParagraph: 'Rev your chainsaw, set some bear traps, become invisible, and much more. Practical or supernatural, each Killer has a unique power to master as you hunt and sacrifice Survivors.',
    tabText: 'The Thrill of the Hunt'
  },
]

const galleryTabsElem = document.querySelector('.gallery-tabs')
let galleryImageElem = document.querySelector('.gallery-image-img')
let active = false
galleryArr.forEach(cards => {
  const galleryTabElem = document.createElement('div')
  galleryTabElem.id = cards.galleryId
  galleryTabElem.className = 'gallery-tab'
  const imageElem = document.createElement('img')
  imageElem.src = cards.mainImage
  const galleyTabTitleElem = document.createElement('div')
  galleyTabTitleElem.className = 'gallery-tab-title'

  const tabTitle = document.createElement('h4')
  tabTitle.textContent = cards.tabText
  galleyTabTitleElem.appendChild(tabTitle)
  galleryTabElem.append(imageElem, galleyTabTitleElem)

  galleryTabsElem.appendChild(galleryTabElem)

  galleryTabElem.addEventListener('click', e => {
    const targetId = e.target.closest('div').id
    galleryArr.forEach(e => {
      if(targetId == e.galleryId) {
        let imageMainContent = galleryArr[targetId].mainImage
        galleryImageElem.src = imageMainContent
      }
    })
    const galleryTextProgressionElem = document.querySelector('.gallery-text__progression')
    const galleryTextParagraph = document.querySelector('.gallery-text__paragraph')
    galleryTextProgressionElem.textContent = galleryArr[targetId].mainText
    galleryTextParagraph.textContent = galleryArr[targetId].mainParagraph
   
    if(active) {
      active.classList.remove('tab-active')
      active.children[1].classList.remove('gallery-tab-title-active')
      active = false
    }
    if(!active) {
      e.target.closest('div').classList.add('tab-active')
      active = e.target.closest('div')
      active.children[1].classList.add('gallery-tab-title-active')
    }
  })
})
