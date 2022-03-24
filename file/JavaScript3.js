const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach(function(imgItem) {
    imgItem.onclick= function() {
        imgId = imgItem.dataset.id;
        slideImage();
    };
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

