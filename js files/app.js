const harmBurger = document.querySelector('.harmburger')
const navMenu = document.querySelector('.mobile-ul')
const seeMore = document.querySelectorAll('.btn')

harmBurger.addEventListener('click' , () => {
    harmBurger.classList.toggle('active')
    navMenu.classList.toggle('active')

})

seeMore.addEventListener('click', () =>  {
    contentMore.classList.toggle('active')
    

})

document.querySelectorAll(".mobile-links").forEach(n => n.addEventListener('click', () => {
    harmBurger.classList.remove('active')
    navMenu.classList.remove('active')
}))






