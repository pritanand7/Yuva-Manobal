$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 3
          }
      }
  });
});
function dark() {
  const body = document.body;
  const toggleCheckbox = document.getElementById('checkbox');
  if (toggleCheckbox) {
    body.classList.toggle('dark', toggleCheckbox.checked);
    console.log("hello");
  } else {
    console.error("Checkbox element not found!");
  }
}