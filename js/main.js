$('.slider-panel__head__btns__left').on('click', function(){
    let w =  $('.slider-panel__main').css('width');
    let width = Number(w.slice(0, w.length - 2)) / 3;
    let m =  $('.slider-panel__main').css('margin-left');
    let margin = Number(m.slice(0, m.length - 2));
    if (margin > - 2.5 * width && margin < - 0.5 * width)
    {
        let left = margin + width;
        $('.slider-panel__main').css('margin-left',left + 'px');
    }//if
});

$('.slider-panel__head__btns__right').on('click', function(){
    let w =  $('.slider-panel__main').css('width');
    let width = Number(w.slice(0, w.length - 2)) / 3;
    let m =  $('.slider-panel__main').css('margin-left');
    let margin = Number(m.slice(0, m.length - 2));
    if (margin < 0.5 * width && margin > -1.5 * width)
    {
        let left = margin - width;
        $('.slider-panel__main').css('margin-left', left + 'px');
    }//if
});

//При изменении размеров окна отменить 
//установленный скриптом слайдера margin-left
$(window).resize(function(){
    $('.slider-panel__main').css('margin-left', '0px');
});

//Создание модельного окна
$(document).ready(function(){
    $(".modalbox").fancybox(); //Показать модальное окно
    $(".signup-box__form").submit(function(){ return false; });
    $(".signup-box__form__btn").on("click", function(){         
        // действия по обработке формы
        // закрываем окно, как правило делать это нужно после обработки данных
        $(".signup-box__form").fadeOut("fast", function(){
            $(this).before("<p><strong>В демо режиме авторизация не работает, но спасибо, что дошли до этого момента!</strong></p>");
            setTimeout("$.fancybox.close()", 5000);
        });
    });
});