document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Dom content loaded!");
  });

document.getElementById('text').addEventListener('click', function(){
  this.innerHTML = 'This is inside!';
});
