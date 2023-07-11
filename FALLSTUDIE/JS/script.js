
/*JS für das Menü mit lokalen Links, das je nach Schriftkultur der Besuchenden, das er selber auswählen soll
rechts oder links dargestellt wird*/
var directionSelect = document.getElementById("direction");

directionSelect.addEventListener("change", function() {
  var menu = document.querySelector("#menu");

  if (directionSelect.value === "rtl") {
    //man addieren eine classe "flex-row-reverse" zu der div, der die nav(Menü mit lokalen Links) und die section enthaltet
    menu.classList.add("flex-row-reverse");    
  } else {
    //hier wird sie entfernen
    menu.classList.remove("flex-row-reverse");
  }
});