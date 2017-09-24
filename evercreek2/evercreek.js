var modal = document.getElementById('popup1');
var modalClose = document.getElementById('modalClose');
var modalCta = document.getElementById('modalCta');
modalClose.onclick = function(){
  modal.style.display = "none";
}
modalCta.onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onload = function()
{
  setTimeout(
    function(){
      modal.style.display = "inherit";
    },
    40000);
}
var scrollPopped = false;
window.onscroll = function()
{
  if ((document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) && scrollPopped == false) {
        modal.style.display = "inherit";
        scrollPopped = true;
}
}
