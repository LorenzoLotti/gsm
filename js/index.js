// Elements.
const mapsTemplate = document.querySelector("#t-maps")
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const menuBtn = document.querySelector('#menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')
const phoneIcons = document.querySelectorAll('.i-phone')
const waIcons = document.querySelectorAll('.i-wa')

const phone = "3388940211"
addEventListener('resize', closeMenu)
menuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

nav.addEventListener('scroll', () =>
{
	if (nav.scrollTop == 0)
		document.body.classList.remove('menu-scrolled')
	else
		document.body.classList.add('menu-scrolled')
})

tippy('.i-maps',
{
	allowHTML: true,
	content: mapsTemplate.innerHTML,
	theme: 'light-border map',
	animation: 'shift-away',
	interactive: true,
	hideOnClick: false
})

tippy('.i-phone',
{
	allowHTML: true,
	content: '+39 ' + phone,
	theme: 'light-border',
	animation: 'shift-away',
})

for (const icon of phoneIcons)
	icon.addEventListener('click', () => open('tel:+39' + phone, '_self'))

for (const icon of waIcons)
	icon.addEventListener('click', () => open('https://wa.me/39' + phone, '_self'))

function openMenu()
{
	document.body.classList.add('menu-open')

	setTimeout(() =>
	{
		main.addEventListener('click', closeMenu)
		focus()
	}, 10)
}

function closeMenu()
{
	main.removeEventListener('click', closeMenu)
	document.body.classList.remove('menu-open')
}
