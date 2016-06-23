$(document).ready(function() {
       var flicker = $('.flicker');
function runLight() {
    flicker.animate({opacity:'+=1'}, 1000);
    flicker.animate({opacity:'-=0.5'}, 1000, runLight);
}
       runLight();
});