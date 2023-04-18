const btn = document.querySelector('.ahbtn');
const hidnav = document.querySelector('.hiddennav');
const imgbut1 = document.querySelector('.imgbut1');
const imgbut2 = document.querySelector('.imgbut2');
const imgbut3 = document.querySelector('.imgbut3');
const imgbut4 = document.querySelector('.imgbut4');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const modal = document.querySelector('.modal_login');
const modalclose = document.querySelector('.modalclose');
const Loginup = document.querySelector('.Loginup');
const loginbtn = document.querySelector('.loginbtn');
const loginbtn1 = document.querySelector('.loginbtn1');
const modal_login_center = document.querySelector('.modal_login_center');
console.log(btn);

Loginup.addEventListener('click', function () {
  modal.classList.remove('none')
})
modalclose.addEventListener('click', function () {
  modal.classList.add('none')
});
loginbtn.addEventListener('click', function () {
  modal_login_center.classList.add('dark')
});
loginbtn1.addEventListener('click', function () {
  modal_login_center.classList.remove('dark')
})

btn.addEventListener('click', function () {
  hidnav.classList.toggle('none')
})

imgbut1.addEventListener('click', function () {
  imgbut1.classList.add('butcor');
  imgbut2.classList.remove('butcor');
  imgbut3.classList.remove('butcor');
  imgbut4.classList.remove('butcor');
  img1.src = "./svg/chair2.svg";



})
imgbut2.addEventListener('click', function () {
  imgbut2.classList.add('butcor');

  imgbut1.classList.remove('butcor');
  imgbut3.classList.remove('butcor');
  imgbut4.classList.remove('butcor');
  img1.src = "./svg/chair3.svg";

})
imgbut3.addEventListener('click', function () {
  imgbut3.classList.add('butcor');

  imgbut2.classList.remove('butcor');
  imgbut1.classList.remove('butcor');
  imgbut4.classList.remove('butcor');
  img1.src = "./svg/chair1.svg";

})
imgbut4.addEventListener('click', function () {
  imgbut4.classList.add('butcor');

  imgbut2.classList.remove('butcor');
  imgbut3.classList.remove('butcor');
  imgbut1.classList.remove('butcor');
  img1.src = "./svg/chair4.svg";

})