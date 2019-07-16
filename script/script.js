$(document).ready(function(){
    $('nav div').hover(function(){
        $(this).find('.sub').stop().slideToggle()
    })
    $('nav div.mmenu').hover(function(){
        $('header .sbox').stop().slideToggle()
    })
})


var imgs=1
var now=0

function slide(){
    now=(now==imgs)?0:now+=1
    $('.imgs img').eq(now).fadeIn()
    $('.imgs img').eq(now-1).fadeOut()
}

function start(){
    $('.imgs img').eq(0).siblings().fadeOut()
    setInterval(slide,3000)
}start()