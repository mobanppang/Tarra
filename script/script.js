$(document).ready(function(){
    $('nav div').hover(function(){
        $(this).find('.sub').stop().slideToggle()
    })
    $('nav div').hover(function(){
        $('header .sbox').stop().slideToggle()
    })
})


/*var imgs=2
var now=0

function slide(){
    now=(now==imgs)?0:now+=1
    $('.slide li').eq(now).animate({
        marginLeft:'0'
    })
    $('.slide li').eq(now-1).animate({
        marginLeft:'-1920px'
    })
}

function start(){
    $('.slide li').eq(0).siblings().animate({
        marginLeft:'-1920px'
    })
    setInterval(slide,4000)
}start()*/