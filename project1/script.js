function changeImage() {
    let image = document.getElementById('myImage');
    if (image.src.includes('image1.jpeg')) {
        image.src = 'image2.jpeg';
    } else {
        image.src = 'image1.jpeg';
    }
}
