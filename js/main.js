// ReloadGoToTop

$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
	$('[class^="form"]').trigger('reset');
});

//preload

$(window).on('load', function () {
	$preloader = $('.areaForLoader'),
		$loader = $preloader.find('.preloader');
	$loader.fadeOut();
	$preloader.delay(500).fadeOut('slow');
})

// navigation menu

jQuery(window).scroll(function () {
	var $sections = $("div[id^='part']");
	$sections.each(function (i, el) {
		var top = $(el).offset().top - 100;
		var bottom = top + $(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if (scroll > top && scroll < bottom) {
			$('a.active').removeClass('active');
			$('a[href="#' + id + '"]').addClass('active');

		}
	})
});
$(".topmenu-container").on("click", "a", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 800);
});

//form tocall

$(document).on('click', '.callform', function () {
	$('.call-to-us').addClass('call-to-us-active');
	$('.call-to-us').fadeIn('slow');
});

$(document).on('click', '.close-modal', function () {
	$('.call-to-us').fadeOut('slow');
});
$(window).scroll(function () {
	if ($(window).scrollTop() > 50) {
		$('.call-to-us').fadeOut('slow');

	}
});
$(document).ready(function () {

	$("#form").submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});

});



// navigation body

$(document).ready(function () {

	$(".part_1_girl").on("click", ".part_1-point", function () {
		$(".part_1-point").removeClass('active-point');
		$(this).addClass('active-point');
		$(".part_1_form span").fadeOut(0, function () {
			$(this).fadeIn(1000);
		});
	});
	$(".part_1_girl").on("click", ".girl-point-1", function () {
		$(".part_1_form-header-1").text("Спортивные");
		$(".part_1_form-header-2").text("ноги");
		$(".part_1_form-button span").text("Хочу спортивные ноги");
	});
	$(".part_1_girl").on("click", ".girl-point-2", function () {
		$(".part_1_form-header-1").text("Красивую");
		$(".part_1_form-header-2").text("грудь");
		$(".part_1_form-button span").text("Хочу спортивную грудь");
	});
	$(".part_1_girl").on("click", ".girl-point-3", function () {
		$(".part_1_form-header-1").text("Накаченные");
		$(".part_1_form-header-2").text("руки");
		$(".part_1_form-button span").text("Хочу накаченные руки");
	});
	$(".part_1_girl").on("click", ".girl-point-4", function () {
		$(".part_1_form-header-1").text("Подтянутую");
		$(".part_1_form-header-2").text("попу");
		$(".part_1_form-button span").text("Хочу подтянутую попу");
	});

});

// navigation map

$(document).ready(function () {
	$(".part-5-location-map").on("click", ".part_5-point", function () {
		$(".part_5-point").removeClass('active-part_5-point');
		$(this).addClass('active-part_5-point');
		$(".location-map-info-adress").fadeOut(0, function () {
			$(this).fadeIn(1000);
		});
		$(".location-map-info-contact").fadeOut(0, function () {
			$(this).fadeIn(1000);
		});
	});
	$(".part-5-location-map").on("click", ".map-point-1", function () {
		$(".city").text("г.Львов");
		$(".house").text("Площа рынок 8");
		$(".telephone").text("050 97 47 121");
		$(".contact-name").text("Спросить Катю");
	});
	$(".part-5-location-map").on("click", ".map-point-2", function () {
		$(".city").text("г.Киев");
		$(".house").text("Крещатик 77");
		$(".telephone").text("050 34 21 175");
		$(".contact-name").text("Спросить Антона");
	});
	$(".part-5-location-map").on("click", ".map-point-3", function () {
		$(".city").text("г.Одесса");
		$(".house").text("Лесной изгиб 15");
		$(".telephone").text("095 43 44 454");
		$(".contact-name").text("Спросить Лену");
	});

});

// smoke
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
canvas.width = $("#canvas").width()
canvas.height = $("#canvas").width()
var party = smokemachine(ctx, [256, 256, 256])

party.start() // start animating

onmousemove = function (e) {
	var x = e.clientX
	var y = e.clientY
	var n = .5
	var t = Math.floor(Math.random() * 200) + 3800
	party.addsmoke(x, y, n, t)
}

party.addsmoke(500, 500, 10) // wow we made smoke
setInterval(function () {
	party.addsmoke(innerWidth / 2, innerHeight, 1)
}, 100);

//modal shadow with video

$('.button').click(function () {
	var buttonId = $(this).attr('id');
	$('#modal-container').removeAttr('class').addClass(buttonId);
	$('body').addClass('modal-active');
})

$('.modal').click(function () {
	$('#modal-container').addClass('out');
	$('body').removeClass('modal-active');
	$('iframe').attr('src', $('iframe').attr('src'));
	$('.start-modal').fadeIn('normal');
});

// youtube

var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-placeholder', {
		videoId: 'jdMr2h_bldY',
		playerVars: {
			frameborder: '0',
			controls: '0',
			showinfo: '0'
		},
		events: {
			onReady: initialize
		}
	});

	$(document).on('click', '.start-modal', function () {
		$(this).fadeOut('slow');
		player.playVideo();
	});

}

function initialize() {
	clearInterval(time_update_interval);
	time_update_interval = setInterval(function () {
		updateTimerDisplay();
		updateProgressBar();
	}, 1000)

}

// slider initialize

$(function () {

	$('#da-slider').cslider();

});

// paralax

var wow = new WOW({
	boxClass: 'wow', // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
	animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
	offset: 0, // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
	mobile: true, // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
	live: true, // поддержка асинхронно загруженных элементов (по умолчанию, включена)
	callback: function (box) {
		// функция срабатывает каждый раз при старте анимации
		// аргумент box — элемент, для которого была запущена анимация
	},
	scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
});
wow.init();


//test script for navigation

//        $(document).ready(function() {
//            $(document).on("scroll", onScroll);
//
//            $('a[href^="#"]').on('click', function(e) {
//                e.preventDefault();
//                $(document).off("scroll");
//
//                $('a').each(function() {
//                    $(this).removeClass('active');
//                })
//                $(this).addClass('active');
//
//                var target = this.hash;
//                $target = $(target);
//                $('html, body').stop().animate({
//                    'scrollTop': $target.offset().top + 5
//                }, 500, 'swing', function() {
//                    window.location.hash = target;
//                    $(document).on("scroll", onScroll);
//                });
//            });
//        });
//
//        function onScroll(event) {
//            var scrollPosition = $(document).scrollTop();
//            $('.topmenu-container  a').each(function() {
//                var currentLink = $(this);
//                var refElement = $(currentLink.attr("href"));
//                if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//                    $('.topmenu-container  a').removeClass("active");
//                    currentLink.addClass("active");
//                } else {
//                    currentLink.removeClass("active");
//                }
//            });
//        }
//
//--------------------
//	
//        // Cache selectors
//        var lastId,
//            topMenu = $(".topmenu-container"),
//            topMenuHeight = topMenu.outerHeight() + 15,
//            // All list items
//            menuItems = topMenu.find("a"),
//            // Anchors corresponding to menu items
//            scrollItems = menuItems.map(function() {
//                var item = $($(this).attr("href"));
//                if (item.length) {
//                    return item;
//                }
//            });
//
//        // Bind click handler to menu items
//        // so we can get a fancy scroll animation
//        menuItems.click(function(e) {
//            var href = $(this).attr("href"),
//                offsetTop = href === "#" ? 0 : $(href).offset().top;
//            $('html, body').stop().animate({
//                scrollTop: offsetTop
//            }, 700);
//            e.preventDefault();
//        });
//
//        // Bind to scroll
//        $(window).scroll(function() {
//            // Get container scroll position
//            var fromTop = $(this).scrollTop() + topMenuHeight;
//
//            // Get id of current scroll item
//            var cur = scrollItems.map(function() {
//                if ($(this).offset().top < fromTop)
//                    return this;
//            });
//            // Get the id of the current element
//            cur = cur[cur.length - 1];
//            var id = cur && cur.length ? cur[0].id : "";
//
//            if (lastId !== id) {
//                lastId = id;
//                // Set/remove active class
//                menuItems
//                    .parent().removeClass("active")
//                    .end().filter("[href='#" + id + "']").parent().addClass("active");
//            }
//        });
