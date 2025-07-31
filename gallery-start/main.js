const btn=document.querySelector("button");
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');

const images = [
  'images/pic1.jpg',
  'images/pic2.jpg', 
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg'
];  
const altTexts = [
    'Image 1',          
    'Image 2',
    'Image 3',
    'Image 4',          
    'Image 5'        
];   
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', altTexts[images.indexOf(image)]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
    console.log(`Image changed to: ${e.target.alt}`);
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

