//scripts page

//AOS data-scroll
AOS.init();
//Toggle button on carasouel component

$(function () {
  $(".carousel").carousel({ interval: 2000})
  $(".carousel").on( "click", function() {
      if($("#carouselButton").children("i").hasClass("fa-pause")){
          $(".carousel").carousel("pause");
          $("#carouselButton").children("i").removeClass("fa-pause");
          $("#carouselButton").children("i").addClass("fa-play");
      }else{
          $(".carousel").carousel("cycle");
          $("#carouselButton").children("i").removeClass("fa-play");
          $("#carouselButton").children("i").addClass("fa-pause");
      }
  })
  $("#loginButton").on( "click", function() {
      $("#loginModal").modal("toggle");
  })
  $("#reserveButton").on( "click", function() {
      $("#reserveModal").modal("toggle");
  })
})
