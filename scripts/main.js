//Button
$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
});

// Nav padding
$(window).scroll(function () {
  let position = $(this).scrollTop();
  if (position >= 120) {
    $(".nav-menu").addClass("custom-navbar");
  } else {
    $(".nav-menu").removeClass("custom-navbar");
  }
});

// awards transform
$(window).scroll(function () {
  let position = $(this).scrollTop();
  console.log(position);
  if (position >= 700) {
    $(".award-text").addClass("formRight");
    $(".award-img").addClass("formLeft");
  } else {
    $(".award-text").removeClass("formRight");
    $(".award-img").removeClass("formLeft");
  }
});

// gallery
$(".gallery-list-item").click(function () {
  let value = $(this).attr("data-filter");
  $(this).addClass("active-item").siblings().removeClass("active-item");
  if (value === "all") {
    $(".filter").show(300);
  } else {
    $(".filter")
      .not("." + value)
      .hide(300);
    $(".filter")
      .filter("." + value)
      .show(300);
  }
});
// membership
$(window).scroll(function () {
  let position = $(this).scrollTop();
  console.log(position);
  if (position >= 4800) {
    $(".card-1").addClass("moveFromRight");
    $(".card-2").addClass("moveFromButton");
    $(".card-3").addClass("moveFromLeft");
  } else {
    $(".card-1").removeClass("moveFromRight");
    $(".card-2").removeClass("moveFromButton");
    $(".card-3").removeClass("moveFromLeft");
  }
});
