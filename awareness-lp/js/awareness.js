window.onload = function(){
window.setTimeout(function()
{
    document.getElementById("title").style.letterSpacing = "12px";
    document.getElementById("title").style.opacity = "1";
    document.getElementById("h-line1").style.opacity = "0.5";
    document.getElementById("sub-title").style.letterSpacing = "0px";
    document.getElementById("sub-title").style.opacity = "1";
    document.getElementById("ccounter").style.opacity = "1";
    console.log('Animations: DONE');
}, 1000);
}
