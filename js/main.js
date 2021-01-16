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

//При изменении размеров окна отменить установленный скриптом слайдера margin-left
$(window).resize(function(){
    $('.slider-panel__main').css('margin-left', '0px');
});