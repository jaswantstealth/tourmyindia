// @ts-nocheck
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector('[data-bs-toggle="offcanvas"]');
  const offcanvasElement = document.getElementById("offcanvasWithBothOptions");

  // Bootstrap's built-in Offcanvas component
  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

  offcanvasElement.addEventListener("show.bs.offcanvas", function () {
    toggler.setAttribute("aria-expanded", "true");
  });

  offcanvasElement.addEventListener("hide.bs.offcanvas", function () {
    toggler.setAttribute("aria-expanded", "false");
  });
});

var swiper = new Swiper(".popularSlider", {
  breakpoints: {
    458: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    958: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".itemsfiveSlider", {
  loop: true,
  breakpoints: {
    458: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".itemsfourSlider", {
  loop: true,
  breakpoints: {
    458: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".homebanner-slider", {
  speed: 1000,
  // autoplay: {
  //   delay: 3000,
  // },
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".galleySliderthumb", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    458: {
      slidesPerView: 1,
    },
    556: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper2 = new Swiper(".galleySliderbg", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// btntoggler
document.querySelectorAll("#toggleButton").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const clickedBtn = this;
    setTimeout(() => {
      if (clickedBtn.classList.contains("collapsed")) {
        clickedBtn.innerHTML =
          'Read More<i class="fa fa-angle-right ps-2" aria-hidden="true"></i>';
      } else {
        clickedBtn.innerHTML =
          'Read Less<i class="fa fa-angle-up ps-2" aria-hidden="true"></i>';
      }
    }, 150);
  });
});
// btntoggler
const closeBtn = document.getElementById("closeBtn");
const searchBtns = document.querySelectorAll(".searchbtn");
const innerpagesearchSec = document.querySelector(".innerpagesearch_sec");

searchBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Search clicked");
    innerpagesearchSec.classList.remove("d-none");
    innerpagesearchSec.classList.toggle("d-block");
  });
});


closeBtn.addEventListener("click", function () {
  console.log("Close clicked");
  innerpagesearchSec.classList.remove("d-block");
  innerpagesearchSec.classList.add("d-none");
});