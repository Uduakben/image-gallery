var imgFull = document.getElementById("imgFull");
var closeBtn = document.getElementById("closeBtn");
let fullImage = document.getElementById("fullImage");


function openFullImage(pic){
    imgFull.style.display = "flex";
    fullImage.src = pic;

}

function closeImg(){
    imgFull.style.display = "none";
}