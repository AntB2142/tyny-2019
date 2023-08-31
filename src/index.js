import "./css/styles.css";
import "./index.html";

const burger = document.getElementById("burger");
const headerMenu = document.getElementById("burger__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});

// import Swiper from '../node_modules/swiper/swiper-bundle.mjs'

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const mySwiper = new Swiper(".swiper-container", {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  observer: true,
  observeParents: true,
  parallax: true,
  breakpoints: {
    700: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button_next",
    prevEl: ".swiper-button_prev",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const messageForm = document.querySelector(".message__form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageText = document.querySelector('textarea[name="message__text"]');
const submitBtn = document.querySelector(".message__submit");
const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = () => {
  if (EMAIL_PATTERN.test(emailInput.value)) {
    emailInput.style.outline = "none";
  } else {
    emailInput.style.outline = "3px solid #FB5555";
  }
};

emailInput.addEventListener("input", validateEmail);

const validateForm = () => {
  let isValid = true;

  if (!nameInput.value) {
    nameInput.style.outline = "3px solid #FB5555";
    isValid = false;
  } else {
    nameInput.style.outline = "none";
  }

  if (!emailInput.value || !EMAIL_PATTERN.test(emailInput.value)) {
    emailInput.style.outline = "3px solid #FB5555";
    isValid = false;
  } else {
    emailInput.style.outline = "none";
  }

  if (!messageText.value) {
    messageText.style.outline = "3px solid #FB5555";
    isValid = false;
  } else {
    messageText.style.outline = "none";
  }

  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageText.value,
    };

    console.log(data);
  }
};

messageForm.addEventListener("submit", handleSubmit);
