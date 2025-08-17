

document.body.addEventListener('mousemove', (e) => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML =` <img src="https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-64.png" alt="">`
  heart.style.height = Math.random()*100 + "px";
//   heart.style.width  = Math.random()*100 + "px";
//   heart.style.position ='absolute';
  heart.style.left = e.offsetX + "px";
  heart.style.top =e.offsetY+ "px";

  const hue = Math.floor(Math.random() * 360);
  heart.style.filter = `hue-rotate(${hue}deg)`;
  document.body.appendChild(heart);
  setTimeout(()=>{
    heart.remove();
  },2000)
});