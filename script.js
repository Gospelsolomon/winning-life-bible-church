//main/script.js
var slider_img = document.querySelector('.slider-img');
var images = ['the church.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',
     'IMG-20221112-WA0004.jpg', 'sunday.jpg'];
var i = 0;  



function prev(){
   if(i <= 0 ) i = images.length;
   i--;
   return setImg();
}

function next(){
  if(i >= images.length-1 ) i = -1; 
  i++; 
  return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'images/'+ images[i]);
}
    
