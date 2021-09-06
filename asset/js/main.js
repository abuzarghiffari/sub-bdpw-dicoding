const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-toggle');
const cancelBtn = document.querySelector('.cancel-toggle');

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
    localStorage.setItem('darkMode', e.target.checked);
})

window.addEventListener('load', (event) => {
  if (localStorage.getItem('darkMode') == 'true') { 
      document.body.classList.add('dark'); 
      document.getElementById('toggle').checked = true; 
    }
})

menuBtn.onclick = () => {
    menu.classList.add('active');
    menuBtn.classList.add('hide'); 
}

cancelBtn.onclick = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide'); 
}

menu.onclick = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide'); 
}

$('.page-scroll').on('click', function () {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');
});







