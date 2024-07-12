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
  setTimeout(() => {
    $("body").addClass("loaded");
  }, 500);
});

function scrollToEl(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const rects = el.getBoundingClientRect();

  window.scrollTo({
    top: rects.y + window.scrollY - 150,
    behavior: "smooth",
  });
}

function ytIframe() {
  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/nAYv2aYF-oI?autoplay=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=1"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("class", "video-iframe");
  iframe.setAttribute("id", "youtube-iframe");
  $(".popup-container").append(iframe);
}

$(document).ready(() => {
  $(".js-scroll-to").on("click", (e) => {
    const id = e.currentTarget.dataset.id;
    scrollToEl(id);
  });

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

  $(".video-yt-ico").on("click", () => {
    $(".popup").addClass("popup--opened").removeClass("popup--closed");
    ytIframe();
  });

  $(".popup-container").on("click", () => {
    $(".popup").addClass("popup--closed").removeClass("popup--opened");
    $(".video-iframe").remove();
  });
});
