var images = [];
var time = 1800;
var i = 0;

images[0] = '../images/imgs1.jpg';
images[1] = '../images/imgs2.jpg';
images[2] = '../images/imgs3.jpg';
images[3] = '../images/imgs4.jpg';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
}
window.onload = changeImg;