document.querySelectorAll('.vertical-normalization').forEach(carousel =>
{
	const images = carousel.querySelectorAll('.carousel-item > img')
	let loadedImages = 0

	const callback = () =>
	{
		if (++loadedImages >= images.length)
			normalizeVertically(images)
	}

	for (const image of images)
		image.complete ? callback() : image.addEventListener('load', callback)
})

function normalizeVertically(images)
{
	let minHeight = null
	let minHeightImage = null
	let minHeightAspectRatio = null

	for (const image of images)
	{
		image.parentElement.style.display = 'block'

		if (minHeight == null || image.clientHeight < minHeight)
		{
			minHeight = image.getBoundingClientRect().height
			minHeightImage = image
			minHeightAspectRatio = minHeight / image.getBoundingClientRect().width
		}
	}

	for (const image of images)
	{
		if (image != minHeightImage)
		{
			const aspectRatio = image.getBoundingClientRect().width / image.getBoundingClientRect().height
			let percentage = aspectRatio * minHeightAspectRatio * 100
			image.style.width = percentage + '%'

			if (percentage < 100)
			{
				image.style.position = image.parentElement.style.position = 'relative'
				image.style.zIndex = 1
				const div = document.createElement('div')
				div.style.background = `url(${image.src}) center / cover`
				div.style.filter = 'blur(5px)'
				div.style.position = 'absolute'
				div.style.inset = 0
				div.style.zIndex = 0
				image.parentElement.append(div)
			}
		}

		image.parentElement.style.display = null
	}
}
