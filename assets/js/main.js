const emailRegExp =
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

const emailInput = $(".js-email-input");

function setInactiveSliders(index, count, type) {
  $(`.slider[data-type="${type}"] .slick-slide`).removeClass("inactive");

  for (let i = count; i >= index - 3; i--) {
    if (![index, index - 1, index + 1].includes(i)) {
      $(
        `.slider[data-type="${type}"] .slick-slide[data-slick-index="${i}"]`
      ).addClass("inactive");
    }
  }
}

function setAppsInactiveSliders(index) {
  const slides = $(`.slider-apps .slick-slide`);
  const count = slides.length;
  slides.removeClass("inactive");

  for (let i = count; i >= index - 2; i--) {
    if (![index].includes(i)) {
      $(`.slider-apps .slick-slide[data-slick-index="${i}"]`).addClass(
        "inactive"
      );
    }
  }
}

$(document).ready(() => {
  $(".slider").on("init", (slick) => {
    $("body").addClass("loaded");

    const type = slick.target.dataset.type;
    const sliderCount = $(`.slider[data-type="${type}"] .slick-slide`).length;

    $(`.slider[data-type="${type}"] .slick-prev`).css({
      "pointer-events": "none",
    });

    setInactiveSliders(1, sliderCount, type);
  });

  $(".slider-apps").on("init", (slick) => {
    setAppsInactiveSliders(0);
  });

  $(".slider-preview").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  });

  $(".slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    variableWidth: true,
    centerMode: true,
  });

  $(".slider-apps").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    centerMode: true,
  });

  $(".shop-preview-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    swipe: false,
  });

  $(".slider").on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    const type = slick.$slider.data().type;
    const sliderCount = $(`.slider[data-type="${type}"] .slick-slide`).length;

    $(`.slider[data-type="${type}"] .slick-prev`).css({
      "pointer-events": nextSlide === 1 ? "none" : "unset",
    });

    setInactiveSliders(nextSlide, sliderCount, type);
  });

  $(".slider-apps").on(
    "beforeChange",
    (event, slick, currentSlide, nextSlide) => {
      setAppsInactiveSliders(nextSlide);
    }
  );

  emailInput.on("change input", (e) => {
    const valid = emailRegExp.test(e.target.value);

    emailInput.toggleClass("error", !valid);
  });
});
