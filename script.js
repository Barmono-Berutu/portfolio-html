document.querySelector(".navbar .menus ").onclick = () => {
    document.querySelector(".navbar .navbar-nav").classList.toggle("active")
}


document.addEventListener("click",(e) => {
if (!document.querySelector(".navbar .menus").contains(e.target) && !document.querySelector(".navbar .navbar-nav").contains(e.target)) {
    document.querySelector(".navbar .navbar-nav").classList.remove("active")
}
})

const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.style.setProperty('--bg', '#010101');
    document.documentElement.style.setProperty('--bg-dua', '#09091c');
    document.documentElement.style.setProperty('--cr', '#fff');
    document.documentElement.style.setProperty('--bg-gr', 'rgba(1, 1, 1, 0.8)');
    document.documentElement.style.setProperty('--fw', '200');
  } else {
    document.documentElement.style.setProperty('--bg', '#fff');
    document.documentElement.style.setProperty('--bg-dua', '#dddddf');
    document.documentElement.style.setProperty('--cr', '#010101');
    document.documentElement.style.setProperty('--bg-gr', 'rgba(255, 255, 255, 0.8)');
    document.documentElement.style.setProperty('--fw', '300');
  }
});
