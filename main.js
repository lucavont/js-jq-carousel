$(document).ready(function() {

    $('.next').click(function() {

        var setImgActive = $('img.active , i.active')
        setImgActive.removeClass('active')

        if (setImgActive.hasClass('last')) {
            $('img.first , i.first').addClass('active')
        } else {
            setImgActive.next().addClass('active')
        }
    })

    $('.prev').click(function() {
        var setImgActive = $('img.active , i.active')
        setImgActive.removeClass('active')

        if (setImgActive.hasClass('first')) {
            $('img.last , i.last').addClass('active')
        } else {
            setImgActive.prev().addClass('active')
        }


    })





})