const menu = document.querySelector('.menu')
const burger = document.querySelector('.menu__burger')
const logo = document.querySelector('.logo')
const lock = document.querySelector('.lock')
const overlay = document.querySelector('._overlay')

const filtersBtn = document.querySelector('.button-sort')
const filters = document.querySelector('.filters')

const body = document.querySelector('html')

const preloader = document.getElementById('pre')

window.onload = function () {
  body.classList.remove('lock')
  if (preloader) {
    preloader.style.display = 'none'
  }
}

if (menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('menu--visible')
    burger.classList.toggle('menu--visible')
    overlay.classList.toggle('menu--visible')
    body.classList.toggle('lock')
  })
}

overlay?.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu--visible')) {
    menu.classList.remove('menu--visible')
    burger.classList.remove('menu--visible')
    overlay.classList.remove('menu--visible')
    body.classList.remove('lock')
    filters?.classList.remove('menu--visible')
  }
})

menu?.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('menu--visible')) {
      menu.classList.remove('menu--visible')
      burger.classList.remove('menu--visible')
      overlay.classList.remove('menu--visible')
      body.classList.remove('lock')
    }
  })
})

menu?.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    if (menu.classList.contains('menu--visible')) {
      menu.classList.remove('menu--visible')
      burger.classList.remove('menu--visible')
      overlay.classList.remove('menu--visible')
      body.classList.remove('lock')
    }
  })
})

// filters menu

const iconClose = document?.querySelector('.filters__mobile-icon--close')

iconClose?.addEventListener('click', () => {
  filters.classList.remove('menu--visible')
  overlay.classList.remove('menu--visible')
  body.classList.remove('lock')
})

filtersBtn?.addEventListener('click', () => {
  filters.classList.add('menu--visible')
  overlay.classList.add('menu--visible')
  body.classList.add('lock')
})

filters?.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    if (filters.classList.contains('menu--visible')) {
      filters.classList.remove('menu--visible')
      overlay.classList.remove('menu--visible')
      body.classList.remove('lock')
    }
  })
})

//  MAIN SLIDER

const mainSlider = document.querySelector('.slider-main')
const thumbMain = document.querySelector('.slider-main__thumb')

if (mainSlider) {
  let sliderPageThumb = new Swiper(thumbMain, {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    watchSlidesProgress: true,
  })
  let sliderPage = new Swiper(mainSlider, {
    loop: true,
    navigation: {
      nextEl: '.page-slider__next',
      prevEl: '.page-slider__prev',
    },
    thumbs: {
      swiper: sliderPageThumb,
    },
  })
}

// SLIDER RELATED

const relatedSlider = document.querySelector('.related-slider__main')

if (relatedSlider) {
  let sliderRelated = new Swiper(relatedSlider, {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      960: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: '.related-slider__next',
      prevEl: '.related-slider__prev',
    },
  })
}

// SLIDER HOME

const sliderProductHome = document.querySelectorAll('.product-slider__main')

sliderProductHome?.forEach((el) => {
  let productSliderThumb = new Swiper(el.querySelector('.product-slider__thumb'), {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 3,
    breakpoints: {
      960: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
    },
    watchSlidesProgress: true,
  })
  let productSlider = new Swiper(el, {
    loop: true,
    thumbs: {
      swiper: productSliderThumb,
    },
  })
})

// REVIEWS SLIDER

const reviewsSliderHome = document.querySelector('.reviews-slider')

if (reviewsSliderHome) {
  let reviewsSlider = new Swiper(reviewsSliderHome, {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.reviews-slider__pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.reviews-slider__next',
      prevEl: '.reviews-slider__prev',
    },
  })
}

// MODAL SLIDER

const modalSliderBook = document.querySelector('.book-yacht__slider')

if (modalSliderBook) {
  let modalSlider = new Swiper(modalSliderBook, {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 1500,
    },
  })
}

// MODALS

const modalBtns = document.querySelectorAll('._modal-open')
const modals = document.querySelectorAll('.modal')

function openModal(el) {
  el.classList.add('_active')
}

function closeModal(e) {
  if (
    e.target.classList.contains('modal__close') ||
    e.target.closest('.modal__close') ||
    e.target.classList.contains('modal__overlay')
  ) {
    e.target.closest('.modal').classList.remove('_active')
    body.classList.remove('lock')
  }
}

modalBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let data = e.target.dataset.modalOpen

    console.log(e.target.dataset.modalOpen)

    modals.forEach((modal) => {
      if (
        modal.dataset.modalName === data ||
        modal.dataset.modalName === e.target.closest('._modal-open').dataset.modalOpen
      ) {
        openModal(modal)
        body.classList.add('lock')
      }
    })
  })
})

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => closeModal(e))
})

// FILTERS

const yachtFilterContainer = document.querySelector('._yacht-filter')

if (yachtFilterContainer) {
  const sortSize = document.querySelector('select[name="size"]')
  const sortPrice = document.querySelector('select[name="price"]')

  const filterBtn = document.querySelector('.filters__mobile--btn')

  const screenWidth = document.documentElement.scrollWidth

  if (screenWidth < 1100) {
    yachtFilter = mixitup(yachtFilterContainer, {
      multifilter: {
        enable: true,
        parseOn: 'submit',
      },
    })

    filterBtn.addEventListener('click', () => {
      yachtFilter.sort(sortSize.value)
      yachtFilter.sort(sortPrice.value)
    })
  } else {
    let yachtFilter = mixitup(yachtFilterContainer, {
      multifilter: {
        enable: true,
      },
    })

    sortSize.onchange = (e) => {
      yachtFilter.sort(e.target.value)
    }

    sortPrice.onchange = (e) => {
      yachtFilter.sort(e.target.value)
    }
  }
}


// HOME FILTERS