const emailRegExp =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

const emailInput = $(".js-email-input");

const groupSliderOptions = {
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 5,
};

document.addEventListener("DOMContentLoaded", () => {
  $("body").addClass("loaded");
});

$(document).ready(() => {
  new Swiper(".swiper-banner", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".top__swiper-btn--right",
      prevEl: ".top__swiper-btn--left",
    },
  });

  new Swiper(
    ".swiper-videos",
    Object.assign(groupSliderOptions, {
      navigation: {
        nextEl: ".videos__swiper-btn--right",
        prevEl: ".videos__swiper-btn--left",
      },
    })
  );
  new Swiper(
    ".swiper-heroes",
    Object.assign(groupSliderOptions, {
      navigation: {
        nextEl: ".heroes__swiper-btn--right",
        prevEl: ".heroes__swiper-btn--left",
      },
    })
  );
  new Swiper(
    ".swiper-shop",
    Object.assign(groupSliderOptions, {
      navigation: {
        nextEl: ".shop__swiper-btn--right",
        prevEl: ".shop__swiper-btn--left",
      },
    })
  );
  new Swiper(
    ".swiper-news",
    Object.assign(groupSliderOptions, {
      navigation: {
        nextEl: ".news__swiper-btn--right",
        prevEl: ".news__swiper-btn--left",
      },
    })
  );

  new Swiper(".swiper-apps", {
    slidesPerView: "auto",
    centeredSlides: true,
    lazyPreloadPrevNext: 3,
    loop: true,
    loopedSlides: 2,
    on: {
      init: function (swiper) {
        swiper.el.classList.remove("before-init");
        swiper.loopFix();
      },
    },
    navigation: {
      nextEl: ".apps__swiper-btn--right",
      prevEl: ".apps__swiper-btn--left",
    },
  });

  $(".shop-preview-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    swipe: false,
  });

  emailInput.on("change input", (e) => {
    const valid = emailRegExp.test(e.target.value);

    emailInput.toggleClass("error", !valid);
  });
});
