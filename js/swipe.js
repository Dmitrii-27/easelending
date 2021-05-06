


new Swiper('.nout-slider',{


	//буллиты и тд
	pagination:{

		//буллиты
		el: '.swiper-pagination',
		clickable: true,

		// Динамические буллеты
		dynamicBullets: false

	},

	
	//количество слайдов 
	slidesPerView: 1,

	//количество пролистывания
	slidesPerGroup: 1,

	//отсутпы между слайдами
	spaceBetween: 20,

	//Бесконечность
	loop: true,

	//Скорость пролистывания
	speed: 1000,



//Свайпание

	//свайпы на ПК
	simulateTouch: true,
	//чувствительность
	touchRatio: 1,
	//другой курсор
	grabCursor: false,
	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колёсика
		sensitivity: 1,
	},


	//клавиатура
	keyboard:{
		//активация
		enabled: true,
		//управление только при видимости
		onlyInViewport: true,
	},
//	


	//FreeMode
	freeMode: false,



	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		968: {
			slidesPerView: 3,
		}
	},
	*/


});







