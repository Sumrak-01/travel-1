let btnMenu = document.querySelector('.burger')
let navMenu = document.querySelector('.wrap-top-right')

btnMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active')
    btnMenu.classList.toggle('active')
})