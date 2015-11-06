
i = 1;

function changeBackground() {
  $("body").css("background-image", "url('imgs/wallpaper" + i%8 + ".jpg')");
  i++;
}

window.setInterval(changeBackground, 10000);
