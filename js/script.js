document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.carouse1 .slide');
  let currentSlide = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'; // 隐藏所有轮播元素
    }
    slides[index].style.display = 'block'; // 显示特定的轮播元素
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000); // 每3秒切换图片
});

let index = 0;
const items = document.querySelectorAll('.game-types li');
const totalItems = items.length;
const displayItems = 5; // 设置每次显示的图片数量

// 初始化，只显示前5张图片
for (let i = 0; i < displayItems; i++) {
  items[i].style.display = 'block';
}

const changeImage = function() {
  items[index].style.display = 'none';
  index = (index + 1) % totalItems;
  items[(index + displayItems - 1) % totalItems].style.display = 'block';
};

// 每3秒自动切换图片
setInterval(changeImage, 3000);

