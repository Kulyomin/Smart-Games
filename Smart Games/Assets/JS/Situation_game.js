const accordion = document.querySelector(".accordion"); // Передаём аккордион
const window_game = document.querySelector(".windows_game"); // Передаем окно с игрой
const btn_answer = document.querySelector(".btn_answer"); // Получаем блок с кнопками
const btn_procced = document.querySelector(".wedo_btn--proceed");
const situation = document.querySelector(".section_text");

// Переменные подсчёта кликов по игровому окну и кнопке для определения номера игровой ситуации
var click_btn = 0;
var click_game = 0;
// Передача кнопок
var all_btn = document.getElementsByClassName("wedo_btn"); // Передача списка элементов
var btn_true = document.querySelector(".true"); // Передача одного элемента
var btn_false = document.querySelectorAll(".false");
var onground = document.getElementById("onground");

// Функция закрытия аккордиона и открытия кнопок при нажатии на игровое поле
window_game.onclick = function() {
	let object = "window";
	click_game++;
	window_game.style.cursor = 'default';

	// Генерация случайного ответа
	RandomTrue();

	// Новое считывание кнопок для изменения вариативности ответов
	all_btn = document.getElementsByClassName("wedo_btn"); // Передача списка элементов
	btn_true = document.querySelector(".true"); // Передача одного элемента
	btn_false = document.querySelectorAll(".false");
	onground = document.getElementById("onground");

	// Вызов функции с кнопками
	btn_action();

	// Плавная анимация удаления аккордиона
	accordion.style.opacity = "0";  
	setTimeout(function () {  
		accordion.style.display = "none";  
	}, 1000);

	// Плавная анимация создания вариантов ответа
	btn_answer.style.display = "block";
	setTimeout(function () {
		btn_answer.style.opacity = "1"; 
	}, 300);

	game_loop(click_game, object);
}// Сделано идеально, менять не нужно

// Функция рандомного числа для генерации правильного ответа
function getRandomInt() {
  return Math.floor(Math.random() * 4);
}

// Запуск игры и смена изображения по нажатию
function game_loop(click, object) {
	//-----Первая сцена-Пожар в лесу-----//
	if(click == "1" && object == "window"){
		situation.textContent = "Гуляя по лесу, вы случайно оказались в центре большого пожара! Ваши действия?";
		var text = document.querySelector(".play_game");
		text.textContent = "";
		btn_true.textContent = "Попробую выйти из опасной зоны только вдоль распространения пожара!";
		btn_false[0].textContent = "Буду оставаться на месте и ожидать помощи от кого-либо";
		btn_false[1].textContent = "Попробую потушить пожар сам";
		btn_false[2].textContent = "Начну жарить сосиски на разгоревшемся костре";
		window_game.style.background = "url('../assets/image/game_image/Fire_Forest.jpg') center no-repeat";
	}
	//-----Вторая сцена-Незнакомец-----//
	if(click == "2" && object == "button"){
		situation.textContent = "Гуляя на десткой площадке к вам подошёл незнакомый человек. Он предложил конфету взамен на то, чтобы вы пошли за ним. Ваши действия?";
		var text = document.querySelector(".play_game");
		window_game.style.background = "url('../assets/image/game_image/Another_man.jpg') center no-repeat";
		btn_true.textContent = "Откажусь от сладкого удовольствия, чтобы обезопасить себя!";
		btn_false[0].textContent = "Возьму конфету и сделаю то что просят, ведь я очень люблю конфеты.";
		btn_false[1].textContent = "Не обращу на него внимания т.к. я занят своими детскими делами";
		btn_false[2].textContent = "Возьму конфету, но идти я не куда не собираюсь";
	}
	//-----Третья сцена-Утопленник-----//
	if(click == "3" && object == "button"){
		situation.textContent = "Купаясь на озере вы начинаете чувствовать, что силы покидают вас и вы начинаете тонуть.Ваши действия?";
		var text = document.querySelector(".play_game");
		window_game.style.background = "url('../assets/image/game_image/Water.jpg') center no-repeat";
		btn_true.textContent = "Не буду поддаваться панике, расслаблю тело, перевернусь на спину и попробую доплыть до берега";
		btn_false[0].textContent = "Начну яростно кричать на помощь и делать резкие движения, чтобы не утонуть.";
		btn_false[1].textContent = "Начну плыть против течения, ведь берег находит позади меня";
		btn_false[2].textContent = "Начну пить воду, пытаясь выпить весь водоём";
	}
	//-----Четвертая сцена-Грабитель-----//
	if(click == "4" && object == "button"){
		situation.textContent = "Вы находитесь дома в одиночестве, ведь родители уехали на работу. Вдруг вы слышите как кто-то пытается открыть дверь, но посмотрев в зрачок понимаете, что это незнакомец.Ваши действия?";
		var text = document.querySelector(".play_game");
		window_game.style.background = "url('../assets/image/game_image/Enemy_home.png') center no-repeat";
		btn_true.textContent = "Не стану открывать ему дверь, а лучше притворюсь, что дома никого нет.";
		btn_false[0].textContent = "Открою дверь и поговорю с этим человеком, вдруг он окажется дружелюбным.";
		btn_false[1].textContent = "Возьму кухонные приборы и попытаюсь угрожать ему";
		btn_false[2].textContent = "Позвоню своим родителям и объясню ситуацию.";
	}
	//-----Пятая сцена-Лифт-----//
	if(click == "5" && object == "button"){
		situation.textContent = "В один прекрасный день, возвращаясь со школы и не ожидая беды, заходите в поъезд и идёте прямо к лифту. Вы нажимаете на свой этаж, но не доехав, лифт застревает.Ваши действия?";
		var text = document.querySelector(".play_game");
		window_game.style.background = "url('../assets/image/game_image/Lift.png') center no-repeat";
		btn_true.textContent = "Позвоню в диспетчерскую службу по кнопке которая находится в лифте и буду спокойно ожидать помощи";
		btn_false[0].textContent = "Попробую самостоятельно открыть двери лифта и вылезти.";
		btn_false[1].textContent = "Начну кричать как бешанный!";
		btn_false[2].textContent = "Просто сяду на пол и буду смиренно ожидать своей участи";
	}
	if(click == "6" && object == "button"){
		situation.textContent = "Игра окончена";
		var text = document.querySelector(".play_game");
		window_game.style.background = "url('../assets/image/game_image/Final_back.jpg') center no-repeat";
		window_game.style.pointerEvents = 'none';
		text.textContent = "Поздравляем! Вы прошли бета версию нашей игры. Надеемся на обратную связь!";
		text.setAttribute('style', 'margin: 30% auto; font-size: 30px; line-height: 1.5; color: #5CFFEE');

		// Плавная анимация удаления кнопок
		btn_answer.style.opacity = "0";  
		setTimeout(function () {  
			btn_answer.style.display = "none";  
		}, 1000);

		// Плавная анимация создания аккордеона
		accordion.style.display = "block";
		setTimeout(function () {
			accordion.style.opacity = "1"; 
		}, 300);
	}
}

// Функция для рандомизации ответов
function RandomTrue() {
	/*Генерация рандомного числа*/
	number = getRandomInt();
	console.log(number);
	for(let i = 0; i < all_btn.length - 1; i++) {
		/*Если id кнопки равен рандомному числу то...*/
		if(i == number) {
			/*Если у этой кнопки есть класс true*/
			if( all_btn[i].classList.contains("true")) {
				break;
			}
			/*Если у этой кнопки нету класса true*/
			else {
				all_btn[i].classList.remove("false");
				all_btn[i].classList.add("true");
			}
		}
		else {
			all_btn[i].classList.remove("true");
			all_btn[i].classList.add("false");
		}
	}
}

function btn_action() {
// При нажатии на правильную кнопку получаем похвалу и инструкцию по поведению в ситуации
btn_true.onclick = function() {

	// Выводим результат ситуации в окно с игрой
	onground.style.background = "url('../assets/image/game_image/true.png') center no-repeat";
	onground.style.opacity = "1";
	// Подсвечивание неправильных ответов
	for(let i = 0; i < btn_false.length; i++){
		btn_false[i].style.pointerEvents = 'none';
		btn_false[i].style.backgroundColor = "red";
		btn_true.style.backgroundColor = "#49EF00";
	}
	// Убираем возможность кликать по кнопкам
	for(let i = 0; i < all_btn.length; i++) {
		all_btn[i].style.cursor = 'default';
	}
	// Запуск таймера до появления кнопки "Продолжить" //
	btn_procced.style.display = "block";
	setTimeout(function () {
		btn_procced.style.opacity = "1"; 
		btn_procced.style.cursor = 'pointer';
	}, 300);
}

// При нажатии на неправильный ответ получает рекомендации и инструкции по поведению в ситуации
for (let i = 0; i < btn_false.length; i++) {
	btn_false[i].onclick = function() {
		btn_true.style.pointerEvents = 'none';
		onground.style.background = "url('../assets/image/game_image/false.png') center no-repeat";
		onground.style.opacity = "1";

		var btn_false = document.getElementsByClassName("wedo_btn false");
		// Подсвечивание неправильных ответов
		for (let i = 0; i < btn_false.length; i++) {
			btn_false[i].style.backgroundColor = "red","!important";
			btn_true.style.backgroundColor = "#49EF00";
			btn_false[i].style.pointerEvents = 'none';
		}
		// Убираем возможность кликать по кнопкам(визуально)
		for(let i = 0; i < all_btn.length; i++) {
			all_btn[i].style.cursor = 'default';
		};
		// Запуск таймера до появления кнопки "Продолжить" //
		btn_procced.style.display = "block";
		setTimeout(function () {
			btn_procced.style.opacity = "1"; 
			btn_procced.style.cursor = 'pointer';
		}, 300);
	}
}
}


// При нажатии на кнопку "Продолжить меняем игровые экраны и текст в кнопках"
btn_procced.onclick = function() {

	var object = "button";
	click_game++;

	// Убираем результат предыдущего вопроса
	onground.style.opacity = "0";

	// Возвращаем всем кнопкам стартовое положение
	for(let i = 0; i < all_btn.length - 1; i++) {
		all_btn[i].style.cursor = 'pointer';
		all_btn[i].style.backgroundColor = '#64BE3C';
		all_btn[i].style.pointerEvents = 'auto';
	}

	// Плавная анимация удаления кнопки "Продолжить"
	btn_procced.style.opacity = "0";  
	setTimeout(function () {  
		btn_procced.style.display = "none";  
	}, 1000);
	RandomTrue();

	// Новое считывание кнопок для изменения вариативности ответов
	all_btn = document.getElementsByClassName("wedo_btn"); // Передача списка элементов
	btn_true = document.querySelector(".true"); // Передача одного элемента
	btn_false = document.querySelectorAll(".false");

	// Функция с кнопками
	btn_action();

	// Применение функции смены ситуации
	game_loop(click_game, object);
}