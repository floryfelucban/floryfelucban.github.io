const icon = document.querySelector(".icon-button");

icon.onclick = function () {
  document.body.classList.toggle("darkmode");

  document.querySelector('div').classList.toggle('gray-bg');
  document.querySelector('.about-picture').classList.toggle('gray-bg');
  document.querySelector('.icon-button').classList.toggle('gray-bg');
}