$(document).ready(function () {
  $('nav a').click(function () {
    $('nav a').removeClass("active");
    $(this).addClass("active");
  });
});

$('input').on('input invalid', function () {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity("Fill in the field")
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity("Не соответствует типу")
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Не соответствует паттерну")
  }
})

$(document).ready(function () {

  $(".toggle-accordion").on("click", function () {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  })

  openAllPanels = function (aId) {
    console.log("setAllPanelOpen");
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function (aId) {
    console.log("setAllPanelclose");
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});

var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});