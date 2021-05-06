


$(document).ready(function() {

    $('.menu__linkt').click(function(event) {//обращаемся к заголовку, по событию слик

        $(this).toggleClass('active').next().slideToggle(300);// добавить при клике заголовку класс, и показать текст с анимацией
    });
});

