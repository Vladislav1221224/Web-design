var dropdown = document.querySelector(".menu_dropdown");

function toggleDropdown(hidden) {
	if (hidden == true && dropdown.classList.contains("hidden")) dropdown.classList.remove("hidden");
	else if(hidden == false && !dropdown.classList.contains("hidden")){
		dropdown.classList.add("hidden");
	}
}
/* Закриття випадаючого меню, якщо клік поза ним */
window.onclick = function (event) {
	console.log("hide");
	if (!event.target.matches(".dropbtn")) {
		console.log(event.target);
		toggleDropdown(false);
	}
	else{
		console.log("show");
		toggleDropdown(true);
	}
};
