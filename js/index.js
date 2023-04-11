// Elements.
const main = document.querySelector('main')
const nav = document.querySelector('nav')

const mail = 'giacomo.officinalotti@gmail.com'
const phone = '3388940211'
addEventListener('resize', closeMenu)
addEventListener('hashchange', closeMenu)
document.querySelector('#menu-btn').addEventListener('click', openMenu)
document.querySelector('#close-menu-btn').addEventListener('click', closeMenu)

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
	content: document.querySelector('#t-maps').innerHTML,
	theme: 'light-border map',
	animation: 'shift-away',
	interactive: true,
	hideOnClick: false
})

tippy('.i-phone',
{
	content: '+39 ' + phone,
	theme: 'light-border',
	animation: 'shift-away',
})

tippy('.i-wa',
{
	content: 'WhatsApp',
	theme: 'light-border',
	animation: 'shift-away',
})

tippy('.i-mail',
{
	content: mail,
	theme: 'light-border',
	animation: 'shift-away',
})

tippy('.i-fb',
{
	content: 'Facebook',
	theme: 'light-border',
	animation: 'shift-away',
})

tippy('.i-ig',
{
	content: 'Instagram',
	theme: 'light-border',
	animation: 'shift-away',
})

nav.querySelectorAll('a').forEach(a =>
	a.addEventListener('click', () => location.hash = ''))

document.querySelectorAll('.i-phone').forEach(icon =>
	icon.addEventListener('click', () => open('tel:+39' + phone, '_self')))

document.querySelectorAll('.i-wa').forEach(icon =>
	icon.addEventListener('click', () => open('https://wa.me/39' + phone, '_self')))

document.querySelectorAll('.i-mail').forEach(icon =>
	icon.addEventListener('click', () => open('mailto:' + mail, '_self')))

document.querySelectorAll('.i-fb').forEach(icon =>
	icon.addEventListener('click', () => open('https://fb.me'), '_self'))

document.querySelectorAll('.i-ig').forEach(icon =>
	icon.addEventListener('click', () => open('https://ig.me'), '_self'))

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
