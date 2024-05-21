function hideThumbnail() {
    document.getElementById('thumbnail').style.display = 'none';
}

function showThumbnail() {
    document.getElementById('thumbnail').style.display = 'block';
}

$(document).on('click', function (event) {
    // Verifica se o clique foi fora da área do botão ou da área expandida
    if (!$(event.target).closest('.navbar').length) {
        // Fecha a área expandida
        $('.navbar-collapse').collapse('hide');
    }
});


const video = document.getElementsByClassName("custom-video__video");
let i;
for (i = 0; i < video.length; i++) {
video[i].addEventListener("click", function () {
const controls = this.nextElementSibling;
if (controls.innerHTML === "▶") {
controls.innerHTML = "| |";
this.play();
} else {
controls.innerHTML = "▶";
this.pause();
}
});
video[i].addEventListener("mouseout", function () {
const controls = this.nextElementSibling;
if (!this.paused) {
controls.style.display = "none";
}
});
video[i].addEventListener("mouseover", function () {
const controls = this.nextElementSibling;
controls.style.display = "flex";
});
video[i].addEventListener(
"ended",
function () {
const controls = this.nextElementSibling;
controls.style.display = "flex";
controls.innerHTML = "▶";
},
false
);
} 