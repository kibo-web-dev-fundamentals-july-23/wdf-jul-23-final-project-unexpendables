document.addEventListener('DOMContentLoaded', function () {
    var images = [
        'istockphoto-1317235140-612x612.jpg',
        'lawfirm.jpg',
        'pinterest_board_photo.png',
        'image 3.jpg'
    ];
    var currentImageIndex = 0;
    var slideshowElement = document.getElementById('carouselSection');

    function changeImage() {
        slideshowElement.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        setTimeout(changeImage, 3000); // Change image every 3 seconds
    }

    changeImage();
});

