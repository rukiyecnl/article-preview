const share = document.querySelector(".shareLogo");

function bindShare(){
    share.addEventListener("mouseover", changeLogo);
    share.addEventListener("mouseout", changeFirst);
}

function changeLogo(){
    share.src = "assets/img/Oval2-1.png";
}
function changeFirst(){
    share.src = "assets/img/Oval2.png";
}

bindShare();
