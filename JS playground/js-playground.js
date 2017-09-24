document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Dom content loaded!");
  });

document.getElementById('text').addEventListener('click', function(){
  this.innerHTML = 'This is inside!';
});




function displayTime() {
    var str = "";

    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var month = currentTime.getMonth();
    var day = currentTime.getDate();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (day < 10)
    {
      day = "0" + day;
    }
    if (month < 10)
    {
      month = "0" + month;
    }
    str += year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + " ";
    return str;
}
function setTimeStamp(elementId)
{
  document.getElementById(elementId).value = displayTime();
  document.getElementById(elementId).innerHTML = displayTime();
}
