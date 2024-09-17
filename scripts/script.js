document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImage = document.getElementById('large-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // 获取小图片的data-large属性值，这是大图片的路径
            const imgSrc = this.getAttribute('data-large');
            // 更新大图片的src属性以切换图片
            largeImage.src = imgSrc;
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImage = document.getElementById('large-image');
    let brightnessLevel = 100; // 初始亮度为100%

    // 切换大图片的函数保持不变
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-large');
            largeImage.src = imgSrc;
        });
    });

    // 增加亮度
    document.getElementById('brightness-up').addEventListener('click', function() {
        brightnessLevel += 10;
        largeImage.style.filter = `brightness(${brightnessLevel}%)`;
    });

    // 减少亮度
    document.getElementById('brightness-down').addEventListener('click', function() {
        brightnessLevel -= 10;
        largeImage.style.filter = `brightness(${brightnessLevel}%)`;
    });

    // 变模糊
    document.getElementById('blur-image').addEventListener('click', function() {
        largeImage.style.filter = `blur(5px)`;
    });

    // 变高清
    document.getElementById('sharpen-image').addEventListener('click', function() {
        largeImage.style.filter = `contrast(200%)`;
    });
});
