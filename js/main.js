$(document).ready(function () {

  $(".home-link").on("click", function () {
    $(".home-body").css("display", "block");
    $(".contact-form").css("display", "none");
    $(".portfolio-container").css("display", "none");
    $(".skills-body").css("display", "none");
  });

  $(".skills-link").on("click", function () {
    $(".home-body").hide();
    $(".contact-form").hide();
    $(".portfolio-container").hide();
    $(".skills-body").addClass("uk-animation-slide-right");
    $(".skills-body").show();
  });

  $(".contact-link").on("click", function () {
    $(".home-body").hide();
    $(".contact-form").addClass("uk-animation-slide-left");
    $(".contact-form").show();
    $(".portfolio-container").hide();
    $(".skills-body").hide();
  });

  $(".portfolio-link").on("click", function () {
    $(".home-body").hide();
    $(".contact-form").hide();
    $(".portfolio-container").addClass("uk-animation-slide-top");
    $(".portfolio-container").show();
    $(".skills-body").hide();
  });

  $("#travel").on("click", function () {
    window.location = "https://blue-project-2.herokuapp.com/";
  });

  $("#friend").on("click", function () {
    window.location = "https://calm-island-98205.herokuapp.com/";
  });

  $("#burger").on("click", function () {
    window.location = "https://nameless-sea-77335.herokuapp.com/";
  });

  $("#group").on("click", function () {
    window.location = "https://kittm.github.io/project-1/";
  });

  $("#store").on("click", function () {
    window.location = "https://github.com/Adoni0/node-mysql";
  });

  $("#train").on("click", function () {
    window.location = "https://adoni0.github.io/Train-Scheduler/";
  });
});
