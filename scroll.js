document.addEventListener("DOMContentLoaded", function() {
	const scrollContainer = document.querySelector('.container');
	const blocksWrapper = document.querySelector('.container');
	const scrollButtons = document.querySelectorAll('.abonements-scroll-btn');
	const scrollDistance = 200;

	scrollButtons.forEach(function(button) {
			button.addEventListener('click', function() {
					const direction = this.classList.contains('prev') ? -1 : 1;
					const scrollAmount = scrollContainer.offsetWidth * direction;
					console.log("Scroll = " + scrollAmount);
					blocksWrapper.scrollBy({
							left: scrollAmount,
							behavior: 'smooth'
					});
			});
	});
});
