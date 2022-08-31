const sectionOverlay = document.querySelector(".section__overlay");

// ====================== Blocks ======================
const bHeaderContent = document.querySelector(".header__content");
// ====================== Wnd ======================

const wndHeader = document.querySelector(".header");
const wndSectionSlider = document.querySelector(".section__slider");

const wndOverlay = document.querySelector(".overlay");
const wndModal = document.querySelector(".modal");
const wndModalClose = document.querySelector(".modal__close");

const wndOrder = document.querySelector(".modal__order");
const wndDeliveryFrom = document.querySelector(".modal__deliveryFrom");
const wndDeliveryComplete = document.querySelector(".modal__complete");
const wndMenu = document.querySelector(".header__menu");
const wndAdditions = document.querySelector(".additions");

const wndBurgerBG = document.querySelector(".burger__bg");
const wndBurgerFull = document.querySelector(".burger-full");

// ====================== List ======================

const listNav = document.querySelector(".header__nav");

// ====================== Buttons ======================
const btnCard = document.querySelector(".header__btn--inner");
const btnToDeliveryFrom = document.querySelector(".modal__delivery-btn-box");
const btnDeliveryFromBack = document.querySelector(
  ".modal__deliveryFrom-btn-back--inner"
);
const btnDeliveryFromNext = document.querySelector(
  ".modal__deliveryFrom-btn--inner"
);
const btnDeliveryCompleteYes = document.querySelector(".modal__complete--yes");
const btnDeliveryCompleteNo = document.querySelector(".modal__complete--no");

const btnMenu = document.querySelector(".header__profile");
const btnMenuIcon = document.querySelector(".header__profile--icon");

const btnModalAdditions = document.querySelectorAll(
  ".modal__card-options--edit"
);

const btnBurger = document.querySelector(".burger-box");

// ====================== Others ======================
const note = document.querySelector(".modal__delivery--note");
const noteBox = document.querySelector(".modal__delivery-note-box");

// document.body.style.paddingTop = wndHeader.offsetHeight;
const calculateHeaderPadding = () => {
  if (!wndSectionSlider) return;
  wndSectionSlider.style.marginTop = `${
    wndHeader.clientHeight +
    parseInt(
      window
        .getComputedStyle(document.documentElement, null)
        .getPropertyValue("font-size")
    ) *
      6.5
  }px`;
};

// wndSectionSlider.style.marginTop = `${wndHeader.clientHeight + 50}px`;
calculateHeaderPadding();

const burger = document.querySelector(".burger");
let swiper;
!window.matchMedia("only screen and (max-width: 800px").matches
  ? (function () {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        },
      });
    })()
  : (function () {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next-unique",
          prevEl: ".swiper-button-prev-unique",
        },
      });
    })();

const closeOverlay = () => {
  wndModal.classList.add("hidden");
  wndOverlay.classList.add("hidden");
};
const openOverlay = () => {
  wndModal.classList.remove("hidden");
  wndOverlay.classList.remove("hidden");
};

btnCard?.addEventListener("click", openOverlay);

wndModalClose?.addEventListener("click", closeOverlay);
wndOverlay?.addEventListener("click", function () {
  if (!wndAdditions.classList.contains("hidden")) hideAdditions();
  else {
    closeOverlay();
  }
});

const showNote = () => {
  note.classList.remove("hidden");
  noteBox.classList.add("hidden");
};
const hideNote = () => {
  note.classList.add("hidden");
  noteBox.classList.remove("hidden");
};

noteBox?.addEventListener("click", showNote);

const showDeliveryOrder = () => {
  wndOrder.classList.remove("hidden");
  wndDeliveryFrom.classList.add("hidden");
  wndDeliveryComplete.classList.add("hidden");
};
const hideDeliveryOrder = () => {
  wndOrder.classList.add("hidden");
  wndDeliveryFrom.classList.remove("hidden");
  wndDeliveryComplete.classList.add("hidden");
};
const showDeliveryFrom = () => {
  wndOrder.classList.add("hidden");
  wndDeliveryFrom.classList.remove("hidden");
  wndDeliveryComplete.classList.add("hidden");
};
const hideDeliveryFrom = () => {
  wndOrder.classList.remove("hidden");
  wndDeliveryFrom.classList.add("hidden");
  wndDeliveryComplete.classList.add("hidden");
};
const showDeliveryComplete = () => {
  wndOrder.classList.add("hidden");
  wndDeliveryFrom.classList.remove("hidden");
  wndDeliveryComplete.classList.remove("hidden");
};
const hideDeliveryComplete = () => {
  wndOrder.classList.remove("hidden");
  wndDeliveryFrom.classList.add("hidden");
  wndDeliveryComplete.classList.add("hidden");
};

wndDeliveryFrom?.addEventListener("click", (e) => {
  if (
    !wndDeliveryComplete.classList.contains("hidden") &&
    e.target !== btnDeliveryFromNext
  )
    wndDeliveryComplete.classList.add("hidden");
});

btnToDeliveryFrom?.addEventListener("click", showDeliveryFrom);
btnDeliveryFromBack?.addEventListener("click", hideDeliveryFrom);
btnDeliveryFromNext?.addEventListener("click", showDeliveryComplete);

btnDeliveryCompleteYes?.addEventListener("click", showDeliveryOrder);
btnDeliveryCompleteNo?.addEventListener("click", showDeliveryOrder);

const showMenu = () => wndMenu?.classList.remove("hidden");
const hideMenu = () => wndMenu?.classList.add("hidden");

document.body.addEventListener("click", (e) => {
  const wndOffsets = wndMenu?.getBoundingClientRect();
  if (
    !(
      e.x > wndOffsets?.left &&
      e.x < wndOffsets?.right &&
      e.y > wndOffsets?.top &&
      e.y < wndOffsets?.bottom
    ) &&
    e.target !== btnMenuIcon
  )
    hideMenu();
});

btnMenu?.addEventListener("click", showMenu);

const showAdditions = () => wndAdditions?.classList.remove("hidden");
const hideAdditions = () => wndAdditions?.classList.add("hidden");

btnModalAdditions.forEach((el) => el.addEventListener("click", showAdditions));

let burgerBGState = false;
const showBurgerBG = () => {
  wndBurgerBG.classList.remove("moved");
  burger.classList.add("burger--open");
  scrollLock();
};
const hideBurgerBG = () => {
  wndBurgerBG.classList.add("moved");
  burger.classList.remove("burger--open");
  scrollUnLock();
};

const showHeaderNav = () => {
  listNav.classList.remove("hidden");
  listNav.classList.add("header__nav-burger");
  btnCard.classList.add("header__btn-burger");
  bHeaderContent.classList.add("header__content-burger");
  btnMenu.classList.add("header__profile-burger");
  btnMenuIcon.classList.add("header__profile--icon-burger");
};
const hideHeaderNav = () => {
  listNav.classList.add("hidden");
  listNav.classList.remove("header__nav-burger");
  btnCard.classList.remove("header__btn-burger");
  bHeaderContent.classList.remove("header__content-burger");
  btnMenu.classList.remove("header__profile-burger");
  btnMenuIcon.classList.remove("header__profile--icon-burger");
};

if (document.documentElement.clientWidth <= 1000) hideHeaderNav();
// else if (document.documentElement.clientWidth > 1000) showHeaderNav();

const MQ1000 = window.matchMedia("only screen and (max-width: 1000px)");
const fncMQ1000 = (e) => {
  !e.matches ? showHeaderNav() : hideHeaderNav();
};

MQ1000.addListener(fncMQ1000);

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   navigation: {
//     nextEl: ".swiper-button-next-unique",
//     prevEl: ".swiper-button-prev-unique",
//   },
// });

const MQ800 = window.matchMedia("only screen and (max-width: 800px");

const fncMQ800 = (e) => {
  !e.matches
    ? (function () {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next-unique",
            prevEl: ".swiper-button-prev-unique",
          },
        });
      })()
    : (function () {
        swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          navigation: {
            nextEl: ".swiper-button-next-unique",
            prevEl: ".swiper-button-prev-unique",
          },
        });
      })();
};

MQ800.addListener(fncMQ800);

btnBurger.addEventListener("click", function () {
  burgerBGState ? hideBurgerBG() : showBurgerBG();
  burgerBGState = !burgerBGState;

  if (listNav.classList.contains("hidden")) showHeaderNav();
  else hideHeaderNav();
});

const scrollLock = () => document.body.classList.add("scroll-lock");
const scrollUnLock = () => document.body.classList.remove("scroll-lock");

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    if (burger.classList.contains("burger--open")) hideBurgerBG();
    if (!wndAdditions?.classList.contains("hidden")) return hideAdditions();
    if (!wndModal?.classList.contains("hidden")) closeOverlay();
  }
});

document.body.addEventListener("resize", function () {
  calculateHeaderPadding();
});
