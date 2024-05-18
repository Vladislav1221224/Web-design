var header = document.createElement("div");

// Додаємо до нового елемента текст або код, який ви хочете вставити
header.innerHTML = `
	<div class="header">
		<div class="left-side">
			<div class="logo_title_wrapper margin">
				<span class="logo_title">GYM</span>
			</div>
		</div>
		<div class="right-side">
			<a href="login.html" class="log_in_button margin button border">
				<span class="log_in_text"> Sign in </span>
			</a>
			<button class="menu_button margin button dropbtn">
				<img src="images/________1.png" class="menu_button_img dropbtn" />
			</button>
		</div>
		<div class="menu_dropdown container_flex_column flex_center hidden">
			<div class="menu_items_wrapper container_flex_column">
				<a href="index.html" class="menu_item">
					Головна
				</a>
				<a href="abonements.html" class="menu_item">
					Абонементи
				</a>
				<a href="memberships.html" class="menu_item">
					Членства
				</a>
				<a href="events.html" class="menu_item">
					Події
				</a>
				<a class="menu_item">Контакти</a>
			</div>
		</div>
	</div>`;
// Вставляємо новий елемент перед першим дочірнім елементом body
document.body.insertBefore(header, document.body.firstChild);
