
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const drop = document.getElementById("dropbtn");
var i;

for (i = 0; i < drop.length; i++) {
  drop[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
});
