document.querySelectorAll('.cnx, .cny').forEach(carousel =>
{
	const horizontal = carousel.classList.contains('cnx')
	let minHeight = null
	let minHeightImage = null
	const images = carousel.querySelectorAll('.carousel-item img');

	for (const image of images)
	{
		if (minHeight == null || image.clientHeight < minHeight)
		{
			minHeight = ratio = image.clientHeight
			minHeightImage = image
		}
	}

	for (const image of images)
	{
		if (image == minHeightImage)
			continue;

		image.style.width = image.clientWidth / image.clientHeight * minHeight + 'px'
	}
})
